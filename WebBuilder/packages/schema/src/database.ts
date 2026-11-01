import { z } from 'zod';

export const ColumnTypeSchema = z.enum([
  'uuid',
  'text',
  'varchar',
  'integer',
  'decimal',
  'boolean',
  'date',
  'timestamp',
  'jsonb'
]);

export type ColumnType = z.infer<typeof ColumnTypeSchema>;

export const ForeignKeyReferenceSchema = z.object({
  table: z.string(),
  column: z.string(),
  onDelete: z.enum(['CASCADE', 'SET NULL', 'RESTRICT']).default('CASCADE'),
});

export type ForeignKeyReference = z.infer<typeof ForeignKeyReferenceSchema>;

export const ColumnDefinitionSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  type: ColumnTypeSchema,
  isPrimary: z.boolean().default(false),
  isNullable: z.boolean().default(true),
  isUnique: z.boolean().default(false),
  defaultValue: z.any().optional(),
  description: z.string().optional(),
  references: ForeignKeyReferenceSchema.optional(),
});

export type ColumnDefinition = z.infer<typeof ColumnDefinitionSchema>;

export const RLSPolicySchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  command: z.enum(['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'ALL']),
  role: z.enum(['anon', 'authenticated', 'admin', 'all']).default('all'),
  using: z.string().default('true'),
  withCheck: z.string().optional(),
});

export type RLSPolicy = z.infer<typeof RLSPolicySchema>;

export const TableDefinitionSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  displayName: z.string().min(1),
  description: z.string().default(''),
  columns: z.array(ColumnDefinitionSchema),
  rlsPolicies: z.array(RLSPolicySchema).default([]),
  seedData: z.array(z.record(z.any())).default([]),
});

export type TableDefinition = z.infer<typeof TableDefinitionSchema>;

export const ApiRouteDefinitionSchema = z.object({
  id: z.string(),
  path: z.string().min(1),
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
  description: z.string().default(''),
  authRequired: z.boolean().default(false),
  targetTable: z.string().optional(),
  action: z.enum(['list', 'get', 'create', 'update', 'delete', 'custom']).default('list'),
});

export type ApiRouteDefinition = z.infer<typeof ApiRouteDefinitionSchema>;

export const DatabaseSchemaDefinitionSchema = z.object({
  tables: z.array(TableDefinitionSchema).default([]),
  apis: z.array(ApiRouteDefinitionSchema).default([]),
  auth: z.object({
    enabled: z.boolean().default(true),
    provider: z.enum(['supabase', 'custom_jwt', 'session_php']).default('supabase'),
    roles: z.array(z.string()).default(['admin', 'editor', 'member', 'customer']),
    defaultRole: z.string().default('member'),
    requireEmailVerification: z.boolean().default(false),
  }).default({}),
});

export type DatabaseSchemaDefinition = z.infer<typeof DatabaseSchemaDefinitionSchema>;
