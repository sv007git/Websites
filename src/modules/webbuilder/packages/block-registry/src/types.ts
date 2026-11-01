import React from 'react';

export type BlockCategory =
  | 'navigation'
  | 'hero'
  | 'features'
  | 'stats'
  | 'social-proof'
  | 'testimonials'
  | 'team'
  | 'services'
  | 'media'
  | 'pricing'
  | 'cta'
  | 'forms'
  | 'interactive'
  | 'ecommerce'
  | 'admin'
  | 'footers';

export interface BlockFieldOption {
  label: string;
  value: string;
}

export type BlockFieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'boolean'
  | 'select'
  | 'color'
  | 'image'
  | 'array';

export interface BlockFieldDefinition {
  type: BlockFieldType;
  label: string;
  description?: string;
  options?: BlockFieldOption[];
  arrayFields?: Record<string, BlockFieldDefinition>;
  defaultValue?: any;
}

export interface BlockRenderProps<TProps = any> {
  id: string;
  props: TProps;
  styles?: Record<string, any>;
  isSelected?: boolean;
  isPreview?: boolean;
  onUpdateProps?: (newProps: Partial<TProps>) => void;
}

export interface BlockDefinition<TProps = any> {
  type: string;
  name: string;
  category: BlockCategory;
  description: string;
  iconName: string;
  defaultProps: TProps;
  fields: Record<string, BlockFieldDefinition>;
  render: React.FC<BlockRenderProps<TProps>>;
}
