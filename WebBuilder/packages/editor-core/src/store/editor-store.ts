import { create } from 'zustand';
import { produce } from 'immer';
import {
  Project,
  PageDefinition,
  BlockInstance,
  TableDefinition,
  ColumnDefinition,
  RLSPolicy,
  ApiRouteDefinition,
  ThemeTokens,
  createEmptyProject,
  validateProject,
} from '@webforge/schema';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export type UiTheme = 'monochrome' | 'dark' | 'light';

export type SidebarTab =
  | 'projects'
  | 'templates'
  | 'pages'
  | 'blocks'
  | 'layers'
  | 'media'
  | 'database'
  | 'api'
  | 'auth'
  | 'integrations'
  | 'settings';

export type InspectorTab = 'content' | 'layout' | 'typography' | 'colors' | 'spacing' | 'seo';

export interface ProjectVersion {
  id: string;
  name: string;
  timestamp: string;
  project: Project;
}

export interface EditorState {
  // Current project
  project: Project;
  activePageId: string;
  selectedBlockId: string | null;
  hoveredBlockId: string | null;

  // Viewport and UI states
  uiTheme: UiTheme;
  deviceMode: DeviceMode;
  zoom: number;
  previewMode: boolean;
  activeSidebarTab: SidebarTab;
  activeInspectorTab: InspectorTab;
  isAiDrawerOpen: boolean;
  isCodeViewOpen: boolean;
  isExportModalOpen: boolean;
  isPublishModalOpen: boolean;

  // History for Undo/Redo
  past: Project[];
  future: Project[];
  maxHistory: number;

  // Persistence and Versioning
  isDirty: boolean;
  lastSavedAt: string | null;
  versionHistory: ProjectVersion[];

  // Actions
  setUiTheme: (theme: UiTheme) => void;
  setDeviceMode: (mode: DeviceMode) => void;
  setZoom: (zoom: number) => void;
  setPreviewMode: (preview: boolean) => void;
  setActiveSidebarTab: (tab: SidebarTab) => void;
  setActiveInspectorTab: (tab: InspectorTab) => void;
  setAiDrawerOpen: (open: boolean) => void;
  setCodeViewOpen: (open: boolean) => void;
  setExportModalOpen: (open: boolean) => void;
  setPublishModalOpen: (open: boolean) => void;

  // Selection actions
  selectPage: (pageId: string) => void;
  selectBlock: (blockId: string | null) => void;
  setHoveredBlock: (blockId: string | null) => void;

  // Project Actions
  loadProject: (project: Project) => void;
  resetProject: (name?: string) => void;
  updateProjectMeta: (updates: Partial<Pick<Project, 'name' | 'slug' | 'description' | 'seo' | 'integrations' | 'exportConfig'>>) => void;
  updateTheme: (updates: Partial<ThemeTokens>) => void;

  // Page Actions
  addPage: (page: Omit<PageDefinition, 'id'> & { id?: string }) => void;
  updatePage: (pageId: string, updates: Partial<PageDefinition>) => void;
  duplicatePage: (pageId: string) => void;
  deletePage: (pageId: string) => void;
  reorderPages: (fromIndex: number, toIndex: number) => void;

  // Block Actions
  addBlock: (pageId: string, blockType: string, defaultProps?: Record<string, any>, targetIndex?: number) => void;
  insertBlockInstance: (pageId: string, block: BlockInstance, targetIndex?: number) => void;
  updateBlockProps: (pageId: string, blockId: string, props: Record<string, any>) => void;
  updateBlockStyles: (pageId: string, blockId: string, styles: Partial<BlockInstance['styles']>) => void;
  moveBlock: (pageId: string, fromIndex: number, toIndex: number) => void;
  duplicateBlock: (pageId: string, blockId: string) => void;
  deleteBlock: (pageId: string, blockId: string) => void;
  setBlockLocked: (pageId: string, blockId: string, locked: boolean) => void;
  setBlockHidden: (pageId: string, blockId: string, hidden: boolean) => void;

  // Database Actions
  addTable: (table: Omit<TableDefinition, 'id'> & { id?: string }) => void;
  updateTable: (tableId: string, updates: Partial<TableDefinition>) => void;
  deleteTable: (tableId: string) => void;
  addColumn: (tableId: string, column: Omit<ColumnDefinition, 'id'> & { id?: string }) => void;
  updateColumn: (tableId: string, columnId: string, updates: Partial<ColumnDefinition>) => void;
  deleteColumn: (tableId: string, columnId: string) => void;
  addRLSPolicy: (tableId: string, policy: Omit<RLSPolicy, 'id'> & { id?: string }) => void;
  deleteRLSPolicy: (tableId: string, policyId: string) => void;
  addApiRoute: (route: Omit<ApiRouteDefinition, 'id'> & { id?: string }) => void;
  updateApiRoute: (routeId: string, updates: Partial<ApiRouteDefinition>) => void;
  deleteApiRoute: (routeId: string) => void;

  // Undo / Redo
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;

  // Save / Versions
  saveProject: () => void;
  createSnapshot: (label?: string) => void;
  restoreVersion: (versionId: string) => void;
}

const STORAGE_KEY = 'webforge_active_project';
const VERSIONS_STORAGE_KEY = 'webforge_project_versions';

function getInitialProject(): Project {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const validated = validateProject(parsed);
        if (validated.success && validated.data) {
          return validated.data;
        }
      }
    } catch {
      // fallback
    }
  }
  return createEmptyProject('project-default', 'WebForge Startup Site');
}

function getInitialVersions(): ProjectVersion[] {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(VERSIONS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
  }
  return [];
}

export const useEditorStore = create<EditorState>((set, get) => {
  const initialProject = getInitialProject();
  const initialPageId = initialProject.pages[0]?.id || 'page-home';

  return {
    project: initialProject,
    activePageId: initialPageId,
    selectedBlockId: null,
    hoveredBlockId: null,

    uiTheme: (typeof window !== 'undefined' && (localStorage.getItem('webforge_ui_theme') as UiTheme)) || 'monochrome',
    deviceMode: 'desktop',
    zoom: 100,
    previewMode: false,
    activeSidebarTab: 'blocks',
    activeInspectorTab: 'content',
    isAiDrawerOpen: false,
    isCodeViewOpen: false,
    isExportModalOpen: false,
    isPublishModalOpen: false,

    past: [],
    future: [],
    maxHistory: 40,

    isDirty: false,
    lastSavedAt: null,
    versionHistory: getInitialVersions(),

    setUiTheme: (uiTheme) => {
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('webforge_ui_theme', uiTheme);
        } catch {
          // ignore
        }
      }
      set({ uiTheme });
    },
    setDeviceMode: (deviceMode) => set({ deviceMode }),
    setZoom: (zoom) => set({ zoom: Math.min(150, Math.max(50, zoom)) }),
    setPreviewMode: (previewMode) => set({ previewMode, selectedBlockId: null }),
    setActiveSidebarTab: (activeSidebarTab) => set({ activeSidebarTab }),
    setActiveInspectorTab: (activeInspectorTab) => set({ activeInspectorTab }),
    setAiDrawerOpen: (isAiDrawerOpen) => set({ isAiDrawerOpen }),
    setCodeViewOpen: (isCodeViewOpen) => set({ isCodeViewOpen }),
    setExportModalOpen: (isExportModalOpen) => set({ isExportModalOpen }),
    setPublishModalOpen: (isPublishModalOpen) => set({ isPublishModalOpen }),

    selectPage: (activePageId) => set({ activePageId, selectedBlockId: null }),
    selectBlock: (selectedBlockId) => set({ selectedBlockId }),
    setHoveredBlock: (hoveredBlockId) => set({ hoveredBlockId }),

    loadProject: (project) => {
      set({
        project,
        activePageId: project.pages[0]?.id || 'page-home',
        selectedBlockId: null,
        past: [],
        future: [],
        isDirty: false,
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
      }
    },

    resetProject: (name = 'New Project') => {
      const newProj = createEmptyProject(`proj-${Date.now()}`, name);
      get().loadProject(newProj);
    },

    updateProjectMeta: (updates) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        Object.assign(draft, updates);
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    updateTheme: (updates) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        draft.theme = { ...draft.theme, ...updates };
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    addPage: (pageInput) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const newId = pageInput.id || `page-${Date.now()}`;
      const nextProject = produce(project, (draft) => {
        draft.pages.push({
          id: newId,
          name: pageInput.name,
          slug: pageInput.slug,
          isHome: pageInput.isHome ?? false,
          layout: pageInput.layout || 'default',
          seo: pageInput.seo || { title: pageInput.name, description: '', keywords: '' },
          blocks: pageInput.blocks || [],
        });
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, activePageId: newId, past: nextPast, future: [], isDirty: true });
    },

    updatePage: (pageId, updates) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          Object.assign(page, updates);
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    duplicatePage: (pageId) => {
      const { project, past, maxHistory } = get();
      const sourcePage = project.pages.find((p) => p.id === pageId);
      if (!sourcePage) return;

      const newId = `page-${Date.now()}`;
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        draft.pages.push({
          ...JSON.parse(JSON.stringify(sourcePage)),
          id: newId,
          name: `${sourcePage.name} (Copy)`,
          slug: `${sourcePage.slug}-copy`,
          isHome: false,
        });
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, activePageId: newId, past: nextPast, future: [], isDirty: true });
    },

    deletePage: (pageId) => {
      const { project, past, maxHistory } = get();
      if (project.pages.length <= 1) return; // Keep at least one page

      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        draft.pages = draft.pages.filter((p) => p.id !== pageId);
        draft.updatedAt = new Date().toISOString();
      });
      const newActivePageId = nextProject.pages[0]?.id || '';
      set({ project: nextProject, activePageId: newActivePageId, past: nextPast, future: [], isDirty: true });
    },

    reorderPages: (fromIndex, toIndex) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const [removed] = draft.pages.splice(fromIndex, 1);
        if (removed) {
          draft.pages.splice(toIndex, 0, removed);
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    addBlock: (pageId, blockType, defaultProps = {}, targetIndex) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const newBlockId = `block-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      
      const newBlock: BlockInstance = {
        id: newBlockId,
        type: blockType,
        name: blockType.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        props: defaultProps,
        styles: { paddingTop: '4rem', paddingBottom: '4rem' },
        hidden: false,
        locked: false,
      };

      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          if (typeof targetIndex === 'number' && targetIndex >= 0) {
            page.blocks.splice(targetIndex, 0, newBlock);
          } else {
            page.blocks.push(newBlock);
          }
        }
        draft.updatedAt = new Date().toISOString();
      });

      set({
        project: nextProject,
        selectedBlockId: newBlockId,
        past: nextPast,
        future: [],
        isDirty: true,
      });
    },

    insertBlockInstance: (pageId, block, targetIndex) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          if (typeof targetIndex === 'number' && targetIndex >= 0) {
            page.blocks.splice(targetIndex, 0, block);
          } else {
            page.blocks.push(block);
          }
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({
        project: nextProject,
        selectedBlockId: block.id,
        past: nextPast,
        future: [],
        isDirty: true,
      });
    },

    updateBlockProps: (pageId, blockId, props) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          const block = page.blocks.find((b) => b.id === blockId);
          if (block) {
            block.props = { ...block.props, ...props };
          }
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    updateBlockStyles: (pageId, blockId, styles) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          const block = page.blocks.find((b) => b.id === blockId);
          if (block) {
            block.styles = { ...block.styles, ...styles };
          }
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    moveBlock: (pageId, fromIndex, toIndex) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page && fromIndex >= 0 && toIndex >= 0 && fromIndex < page.blocks.length && toIndex < page.blocks.length) {
          const [removed] = page.blocks.splice(fromIndex, 1);
          if (removed) {
            page.blocks.splice(toIndex, 0, removed);
          }
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    duplicateBlock: (pageId, blockId) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      let newBlockId = '';

      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          const index = page.blocks.findIndex((b) => b.id === blockId);
          if (index !== -1) {
            const original = page.blocks[index];
            newBlockId = `block-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
            const clone: BlockInstance = {
              ...JSON.parse(JSON.stringify(original)),
              id: newBlockId,
              name: `${original.name} (Copy)`,
            };
            page.blocks.splice(index + 1, 0, clone);
          }
        }
        draft.updatedAt = new Date().toISOString();
      });

      set({
        project: nextProject,
        selectedBlockId: newBlockId || null,
        past: nextPast,
        future: [],
        isDirty: true,
      });
    },

    deleteBlock: (pageId, blockId) => {
      const { project, past, maxHistory, selectedBlockId } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          page.blocks = page.blocks.filter((b) => b.id !== blockId);
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({
        project: nextProject,
        selectedBlockId: selectedBlockId === blockId ? null : selectedBlockId,
        past: nextPast,
        future: [],
        isDirty: true,
      });
    },

    setBlockLocked: (pageId, blockId, locked) => {
      const { project } = get();
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          const block = page.blocks.find((b) => b.id === blockId);
          if (block) block.locked = locked;
        }
      });
      set({ project: nextProject, isDirty: true });
    },

    setBlockHidden: (pageId, blockId, hidden) => {
      const { project } = get();
      const nextProject = produce(project, (draft) => {
        const page = draft.pages.find((p) => p.id === pageId);
        if (page) {
          const block = page.blocks.find((b) => b.id === blockId);
          if (block) block.hidden = hidden;
        }
      });
      set({ project: nextProject, isDirty: true });
    },

    // Database Actions
    addTable: (tableInput) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const newId = tableInput.id || `table-${Date.now()}`;
      const nextProject = produce(project, (draft) => {
        draft.database.tables.push({
          id: newId,
          name: tableInput.name,
          displayName: tableInput.displayName,
          description: tableInput.description || '',
          columns: tableInput.columns || [
            {
              id: 'col-id',
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              isNullable: false,
              isUnique: true,
            },
            {
              id: 'col-created-at',
              name: 'created_at',
              type: 'timestamp',
              isPrimary: false,
              isNullable: false,
              isUnique: false,
              defaultValue: 'now()',
            },
          ],
          rlsPolicies: tableInput.rlsPolicies || [],
          seedData: tableInput.seedData || [],
        });
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    updateTable: (tableId, updates) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const table = draft.database.tables.find((t) => t.id === tableId);
        if (table) Object.assign(table, updates);
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    deleteTable: (tableId) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        draft.database.tables = draft.database.tables.filter((t) => t.id !== tableId);
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    addColumn: (tableId, colInput) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const newId = colInput.id || `col-${Date.now()}`;
      const nextProject = produce(project, (draft) => {
        const table = draft.database.tables.find((t) => t.id === tableId);
        if (table) {
          table.columns.push({
            id: newId,
            name: colInput.name,
            type: colInput.type,
            isPrimary: colInput.isPrimary ?? false,
            isNullable: colInput.isNullable ?? true,
            isUnique: colInput.isUnique ?? false,
            defaultValue: colInput.defaultValue,
            description: colInput.description,
            references: colInput.references,
          });
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    updateColumn: (tableId, columnId, updates) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const table = draft.database.tables.find((t) => t.id === tableId);
        if (table) {
          const col = table.columns.find((c) => c.id === columnId);
          if (col) Object.assign(col, updates);
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    deleteColumn: (tableId, columnId) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const table = draft.database.tables.find((t) => t.id === tableId);
        if (table) {
          table.columns = table.columns.filter((c) => c.id !== columnId);
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    addRLSPolicy: (tableId, policyInput) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const newId = policyInput.id || `policy-${Date.now()}`;
      const nextProject = produce(project, (draft) => {
        const table = draft.database.tables.find((t) => t.id === tableId);
        if (table) {
          table.rlsPolicies.push({
            id: newId,
            name: policyInput.name,
            command: policyInput.command,
            role: policyInput.role || 'all',
            using: policyInput.using || 'true',
            withCheck: policyInput.withCheck,
          });
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    deleteRLSPolicy: (tableId, policyId) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const table = draft.database.tables.find((t) => t.id === tableId);
        if (table) {
          table.rlsPolicies = table.rlsPolicies.filter((p) => p.id !== policyId);
        }
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    addApiRoute: (routeInput) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const newId = routeInput.id || `route-${Date.now()}`;
      const nextProject = produce(project, (draft) => {
        draft.database.apis.push({
          id: newId,
          path: routeInput.path,
          method: routeInput.method,
          description: routeInput.description || '',
          authRequired: routeInput.authRequired ?? false,
          targetTable: routeInput.targetTable,
          action: routeInput.action || 'list',
        });
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    updateApiRoute: (routeId, updates) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        const route = draft.database.apis.find((r) => r.id === routeId);
        if (route) Object.assign(route, updates);
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    deleteApiRoute: (routeId) => {
      const { project, past, maxHistory } = get();
      const nextPast = [...past, project].slice(-maxHistory);
      const nextProject = produce(project, (draft) => {
        draft.database.apis = draft.database.apis.filter((r) => r.id !== routeId);
        draft.updatedAt = new Date().toISOString();
      });
      set({ project: nextProject, past: nextPast, future: [], isDirty: true });
    },

    // Undo / Redo
    undo: () => {
      const { past, project, future } = get();
      if (past.length === 0) return;

      const previous = past[past.length - 1];
      const nextPast = past.slice(0, past.length - 1);
      const nextFuture = [project, ...future];

      set({
        project: previous,
        past: nextPast,
        future: nextFuture,
        isDirty: true,
      });
    },

    redo: () => {
      const { past, project, future, maxHistory } = get();
      if (future.length === 0) return;

      const next = future[0];
      const nextFuture = future.slice(1);
      const nextPast = [...past, project].slice(-maxHistory);

      set({
        project: next,
        past: nextPast,
        future: nextFuture,
        isDirty: true,
      });
    },

    canUndo: () => get().past.length > 0,
    canRedo: () => get().future.length > 0,

    saveProject: () => {
      const { project, versionHistory } = get();
      const now = new Date().toISOString();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
      }
      set({ isDirty: false, lastSavedAt: now });
    },

    createSnapshot: (label) => {
      const { project, versionHistory } = get();
      const now = new Date().toISOString();
      const newVersion: ProjectVersion = {
        id: `ver-${Date.now()}`,
        name: label || `Snapshot ${versionHistory.length + 1} (${new Date().toLocaleTimeString()})`,
        timestamp: now,
        project: JSON.parse(JSON.stringify(project)),
      };
      const nextVersions = [newVersion, ...versionHistory].slice(0, 20);
      if (typeof window !== 'undefined') {
        localStorage.setItem(VERSIONS_STORAGE_KEY, JSON.stringify(nextVersions));
      }
      set({ versionHistory: nextVersions });
    },

    restoreVersion: (versionId) => {
      const { versionHistory, project, past, maxHistory } = get();
      const found = versionHistory.find((v) => v.id === versionId);
      if (!found) return;

      const nextPast = [...past, project].slice(-maxHistory);
      get().loadProject(found.project);
      set({ past: nextPast, future: [], isDirty: true });
    },
  };
});
