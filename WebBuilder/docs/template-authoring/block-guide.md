# WebForge Studio: Block Authoring Guide

## Overview

Blocks in WebForge Studio are modular, responsive React components registered in `@webforge/block-registry`. Each block declares its category, visual preview icon, default props, schema field definitions for the dynamic inspector, and render component.

---

## 1. Block Definition Specification

```typescript
export interface BlockDefinition<TProps = any> {
  type: string;                    // Unique identifier e.g. 'hero-split'
  name: string;                    // Inspector display label e.g. 'Split Hero with Mockup'
  category: BlockCategory;         // One of 16 supported categories
  description: string;             // Purpose and responsive layout note
  iconName: string;                // Lucide icon identifier
  defaultProps: TProps;            // Initial property values
  fields: Record<string, BlockFieldDefinition>; // Dynamic inspector field schema
  render: React.FC<BlockRenderProps<TProps>>;   // Visual canvas component
}
```

### Supported Field Types for the Inspector

| Type | Rendered Input Control |
| :--- | :--- |
| `'text'` | Single-line input (`<input type="text">`) |
| `'textarea'` | Multi-line text input (`<textarea rows={3}>`) |
| `'boolean'` | Toggle switch / checkbox |
| `'number'` | Numeric input |
| `'select'` | Dropdown selection with defined `options: [{ label, value }]` |
| `'color'` | Color picker and hex input |
| `'image'` | URL string input with asset picker shortcut |
| `'array'` | Repeatable list editor (e.g. feature items, review cards) |

---

## 2. Rendering Implementation Guidelines

1. **Theme Variable Consumption**: Use Tailwind CSS utilities or CSS variables (`var(--wf-color-primary)`) to respect the active project's theme palette.
2. **Responsive Fallbacks**: Always provide mobile-first responsive classes (`text-3xl sm:text-5xl lg:text-6xl`, `grid md:grid-cols-3`).
3. **Editable State**: In edit mode (`isPreview === false`), clicking elements or changing text updates the canonical AST via `onUpdateProps({ [key]: value })`.
4. **Registration**: Add your block definition to the appropriate category array and export it in `packages/block-registry/src/registry.ts`.
