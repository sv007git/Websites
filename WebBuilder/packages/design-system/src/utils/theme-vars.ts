import { ThemeTokens } from '@webforge/schema';

export function themeTokensToCssVariables(theme: ThemeTokens): Record<string, string> {
  return {
    '--wf-color-primary': theme.colors.primary,
    '--wf-color-primary-hover': theme.colors.primaryHover,
    '--wf-color-primary-foreground': theme.colors.primaryForeground,
    '--wf-color-secondary': theme.colors.secondary,
    '--wf-color-secondary-foreground': theme.colors.secondaryForeground,
    '--wf-color-accent': theme.colors.accent,
    '--wf-color-accent-foreground': theme.colors.accentForeground,
    '--wf-color-background': theme.colors.background,
    '--wf-color-surface': theme.colors.surface,
    '--wf-color-surface-border': theme.colors.surfaceBorder,
    '--wf-color-text': theme.colors.text,
    '--wf-color-text-muted': theme.colors.textMuted,
    '--wf-color-destructive': theme.colors.destructive,
    '--wf-color-destructive-foreground': theme.colors.destructiveForeground,
    '--wf-color-success': theme.colors.success,
    '--wf-font-heading': theme.typography.headingFont,
    '--wf-font-body': theme.typography.bodyFont,
    '--wf-font-base-size': theme.typography.baseSize,
    '--wf-radius': theme.layout.borderRadius,
    '--wf-container-max': theme.layout.containerMaxWidth,
    '--wf-shadow': theme.layout.boxShadow,
  };
}

export function generateCssVariablesString(theme: ThemeTokens): string {
  const vars = themeTokensToCssVariables(theme);
  return Object.entries(vars)
    .map(([key, val]) => `${key}: ${val};`)
    .join(' ');
}
