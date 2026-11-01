export interface GitHubDeployConfig {
  repoName: string;
  isPrivate: boolean;
  branch: string;
  commitMessage: string;
}

export function validateGitHubConfig(config: Partial<GitHubDeployConfig>): { valid: boolean; error?: string } {
  if (!config.repoName || !config.repoName.trim()) {
    return { valid: false, error: 'Repository name is required.' };
  }
  if (!/^[a-zA-Z0-9_.-]+$/.test(config.repoName)) {
    return { valid: false, error: 'Repository name can only contain alphanumeric characters, hyphens, and underscores.' };
  }
  return { valid: true };
}

export interface StripePaymentIntentConfig {
  amountCents: number;
  currency: string;
  testMode: boolean;
  metadata?: Record<string, string>;
}

export function createStripeTestIntent(config: StripePaymentIntentConfig): { id: string; clientSecret: string; status: string } {
  const testId = `pi_test_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  return {
    id: testId,
    clientSecret: `${testId}_secret_${Math.random().toString(36).substring(2, 10)}`,
    status: 'requires_payment_method',
  };
}

export interface EmailDispatchPayload {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export function validateEmailPayload(payload: EmailDispatchPayload): { valid: boolean; error?: string } {
  if (!payload.to || !payload.to.includes('@')) {
    return { valid: false, error: 'Invalid recipient email address.' };
  }
  if (!payload.subject || !payload.subject.trim()) {
    return { valid: false, error: 'Email subject is required.' };
  }
  return { valid: true };
}
