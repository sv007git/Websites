import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

describe('App Root Component', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText('ShortsHub')).toBeInTheDocument();
  });
});
