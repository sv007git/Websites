import { DatabaseSchemaDefinition, TableDefinition, ColumnDefinition, RLSPolicy } from '@webforge/schema';

function mapPostgresType(col: ColumnDefinition): string {
  switch (col.type) {
    case 'uuid':
      return col.isPrimary ? 'UUID DEFAULT gen_random_uuid()' : 'UUID';
    case 'text':
      return 'TEXT';
    case 'varchar':
      return 'VARCHAR(255)';
    case 'integer':
      return 'INTEGER';
    case 'decimal':
      return 'NUMERIC(12, 2)';
    case 'boolean':
      return 'BOOLEAN';
    case 'date':
      return 'DATE';
    case 'timestamp':
      return 'TIMESTAMPTZ';
    case 'jsonb':
      return 'JSONB';
    default:
      return 'TEXT';
  }
}

export function generatePostgresTableSql(table: TableDefinition): string {
  const columnLines: string[] = [];

  table.columns.forEach((col) => {
    let line = `  "${col.name}" ${mapPostgresType(col)}`;

    if (col.isPrimary) {
      line += ' PRIMARY KEY';
    } else {
      if (!col.isNullable) {
        line += ' NOT NULL';
      }
      if (col.isUnique) {
        line += ' UNIQUE';
      }
      if (col.defaultValue !== undefined && col.defaultValue !== null && col.defaultValue !== '') {
        line += ` DEFAULT ${col.defaultValue}`;
      }
      if (col.references) {
        line += ` REFERENCES public."${col.references.table}"("${col.references.column}") ON DELETE ${col.references.onDelete}`;
      }
    }

    columnLines.push(line);
  });

  let sql = `-- Table: public.${table.name}\n`;
  sql += `CREATE TABLE IF NOT EXISTS public."${table.name}" (\n`;
  sql += columnLines.join(',\n');
  sql += '\n);\n\n';

  // Enable Row Level Security
  sql += `-- Row Level Security (RLS)\n`;
  sql += `ALTER TABLE public."${table.name}" ENABLE ROW LEVEL SECURITY;\n\n`;

  // Policies
  if (table.rlsPolicies && table.rlsPolicies.length > 0) {
    table.rlsPolicies.forEach((policy) => {
      const roleTarget = policy.role === 'all' ? 'PUBLIC' : policy.role;
      sql += `CREATE POLICY "${policy.name.replace(/"/g, '')}"\n`;
      sql += `  ON public."${table.name}"\n`;
      sql += `  FOR ${policy.command}\n`;
      sql += `  TO ${roleTarget}\n`;
      sql += `  USING (${policy.using || 'true'})`;
      if (policy.withCheck) {
        sql += `\n  WITH CHECK (${policy.withCheck})`;
      }
      sql += ';\n';
    });
    sql += '\n';
  } else {
    // Default safe policy
    sql += `-- Default policy: authenticated users can read\n`;
    sql += `CREATE POLICY "Allow authenticated read"\n`;
    sql += `  ON public."${table.name}"\n`;
    sql += `  FOR SELECT\n`;
    sql += `  TO authenticated\n`;
    sql += `  USING (true);\n\n`;
  }

  return sql;
}

export function generatePostgresSeedSql(tables: TableDefinition[]): string {
  const sqlChunks: string[] = ['-- WebForge Studio Generated Seed Data\n'];

  tables.forEach((table) => {
    if (table.seedData && table.seedData.length > 0) {
      sqlChunks.push(`-- Seed data for: public.${table.name}`);
      table.seedData.forEach((row) => {
        const keys = Object.keys(row);
        const cols = keys.map((k) => `"${k}"`).join(', ');
        const values = keys
          .map((k) => {
            const val = row[k];
            if (val === null || val === undefined) return 'NULL';
            if (typeof val === 'number' || typeof val === 'boolean') return `${val}`;
            return `'${String(val).replace(/'/g, "''")}'`;
          })
          .join(', ');

        sqlChunks.push(`INSERT INTO public."${table.name}" (${cols}) VALUES (${values}) ON CONFLICT DO NOTHING;`);
      });
      sqlChunks.push('\n');
    }
  });

  return sqlChunks.join('\n');
}

export function generateFullSupabaseMigration(database: DatabaseSchemaDefinition): { migrationSql: string; seedSql: string } {
  const migrationChunks: string[] = [
    `-- WebForge Studio Supabase / PostgreSQL Initial Migration\n`,
    `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";\n\n`,
  ];

  database.tables.forEach((tbl) => {
    migrationChunks.push(generatePostgresTableSql(tbl));
  });

  const seedSql = generatePostgresSeedSql(database.tables);

  return {
    migrationSql: migrationChunks.join('\n'),
    seedSql,
  };
}

export function generateSupabaseClientCode(): string {
  return `import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing in environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
`;
}
