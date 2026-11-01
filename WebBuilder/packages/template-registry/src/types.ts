import { Project, DatabaseSchemaDefinition, ThemeTokens } from '@webforge/schema';

export interface BackendCapabilityManifest {
  requiresDatabase: boolean;
  requiresAuth: boolean;
  supportedRoles: string[];
  tables: string[];
  apiEndpoints: string[];
}

export interface TemplateDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  thumbnail: string;
  previewUrl?: string;
  pagesCount: number;
  tags: string[];
  features: string[];
  setupGuide: string;
  backendCapabilities: BackendCapabilityManifest;
  project: Project;
}
