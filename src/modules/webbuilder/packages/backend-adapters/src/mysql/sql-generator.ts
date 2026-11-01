import { DatabaseSchemaDefinition, TableDefinition, ColumnDefinition } from '@webforge/schema';

function mapMysqlType(col: ColumnDefinition): string {
  switch (col.type) {
    case 'uuid':
      return 'VARCHAR(36)';
    case 'text':
      return 'TEXT';
    case 'varchar':
      return 'VARCHAR(255)';
    case 'integer':
      return 'INT';
    case 'decimal':
      return 'DECIMAL(12, 2)';
    case 'boolean':
      return 'TINYINT(1)';
    case 'date':
      return 'DATE';
    case 'timestamp':
      return 'DATETIME';
    case 'jsonb':
      return 'JSON';
    default:
      return 'TEXT';
  }
}

export function generateMysqlTableSql(table: TableDefinition): string {
  const columnLines: string[] = [];
  const primaryKeys: string[] = [];

  table.columns.forEach((col) => {
    let line = `  \`${col.name}\` ${mapMysqlType(col)}`;

    if (col.isPrimary) {
      primaryKeys.push(`\`${col.name}\``);
    }

    if (!col.isNullable) {
      line += ' NOT NULL';
    } else {
      line += ' NULL';
    }

    if (col.isUnique && !col.isPrimary) {
      line += ' UNIQUE';
    }

    if (col.defaultValue !== undefined && col.defaultValue !== null && col.defaultValue !== '') {
      if (col.defaultValue === 'now()') {
        line += ' DEFAULT CURRENT_TIMESTAMP';
      } else {
        line += ` DEFAULT ${col.defaultValue}`;
      }
    }

    columnLines.push(line);
  });

  if (primaryKeys.length > 0) {
    columnLines.push(`  PRIMARY KEY (${primaryKeys.join(', ')})`);
  }

  // Foreign keys
  table.columns.forEach((col) => {
    if (col.references) {
      columnLines.push(
        `  CONSTRAINT \`fk_${table.name}_${col.name}\` FOREIGN KEY (\`${col.name}\`) REFERENCES \`${col.references.table}\` (\`${col.references.column}\`) ON DELETE ${col.references.onDelete}`
      );
    }
  });

  let sql = `-- Table: \`${table.name}\`\n`;
  sql += `CREATE TABLE IF NOT EXISTS \`${table.name}\` (\n`;
  sql += columnLines.join(',\n');
  sql += '\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n\n';

  return sql;
}

export function generateMysqlSeedSql(tables: TableDefinition[]): string {
  const sqlChunks: string[] = ['-- WebForge Studio MySQL Seed Data\n'];

  tables.forEach((table) => {
    if (table.seedData && table.seedData.length > 0) {
      sqlChunks.push(`-- Seed data for: \`${table.name}\``);
      table.seedData.forEach((row) => {
        const keys = Object.keys(row);
        const cols = keys.map((k) => `\`${k}\``).join(', ');
        const values = keys
          .map((k) => {
            const val = row[k];
            if (val === null || val === undefined) return 'NULL';
            if (typeof val === 'number') return `${val}`;
            if (typeof val === 'boolean') return val ? '1' : '0';
            return `'${String(val).replace(/'/g, "\\'")}'`;
          })
          .join(', ');

        sqlChunks.push(`INSERT IGNORE INTO \`${table.name}\` (${cols}) VALUES (${values});`);
      });
      sqlChunks.push('\n');
    }
  });

  return sqlChunks.join('\n');
}

export function generateFullMysqlMigration(database: DatabaseSchemaDefinition): { migrationSql: string; seedSql: string } {
  const migrationChunks: string[] = [
    `-- WebForge Studio MySQL 8.x / MariaDB Initial Migration\n`,
    `SET FOREIGN_KEY_CHECKS = 0;\n\n`,
  ];

  database.tables.forEach((tbl) => {
    migrationChunks.push(generateMysqlTableSql(tbl));
  });

  migrationChunks.push(`SET FOREIGN_KEY_CHECKS = 1;\n`);

  const seedSql = generateMysqlSeedSql(database.tables);

  return {
    migrationSql: migrationChunks.join('\n'),
    seedSql,
  };
}
