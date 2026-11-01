import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { App } from '@/modules/invitedecide/App';

describe('App Root Render Test', () => {
  it('renders without throwing runtime errors', () => {
    window.location.hash = '#/';
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  it('renders dashboard route without crashing', () => {
    window.location.hash = '#/dashboard';
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  it('renders login route without crashing', () => {
    window.location.hash = '#/login';
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  it('renders invite portal route without crashing', () => {
    window.location.hash = '#/invite/demo';
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });
});
