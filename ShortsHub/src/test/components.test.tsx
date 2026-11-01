import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageModal } from '../components/LanguageSelector/LanguageModal';
import { BottomNavigation } from '../components/BottomNavigation/BottomNavigation';
import { SnapTubeGuideModal } from '../components/DailyWatchlist/SnapTubeGuideModal';
import { VideoCard } from '../components/VideoCard/VideoCard';
import { VideoItem } from '../types';

describe('UI Components', () => {
  it('renders LanguageModal and toggles language selection', () => {
    const onSave = vi.fn();
    render(
      <LanguageModal
        isOpen={true}
        currentLanguages={['English']}
        onSave={onSave}
      />
    );

    expect(screen.getByText('Select Content Languages')).toBeInTheDocument();
    expect(screen.getByText('தமிழ்')).toBeInTheDocument();
    expect(screen.getByText('తెలుగు')).toBeInTheDocument();

    // Toggle Tamil
    const tamilOption = screen.getByText('தமிழ்');
    fireEvent.click(tamilOption);

    // Save
    const saveBtn = screen.getByText('Save Language Preferences');
    fireEvent.click(saveBtn);

    expect(onSave).toHaveBeenCalledWith(['English', 'Tamil']);
  });

  it('renders BottomNavigation with 5 tabs and daily watchlist badge', () => {
    const onTabChange = vi.fn();
    render(
      <BottomNavigation
        activeTab="home"
        onTabChange={onTabChange}
        todayWatchedCount={5}
      />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();

    // Badge showing 5
    expect(screen.getByText('5')).toBeInTheDocument();

    // Click tab
    fireEvent.click(screen.getByText('Watchlist'));
    expect(onTabChange).toHaveBeenCalledWith('watchlist');
  });

  it('renders SnapTubeGuideModal with instructions and path', () => {
    const onClose = vi.fn();
    render(<SnapTubeGuideModal isOpen={true} onClose={onClose} />);

    expect(screen.getByText('SnapTube Download Guide')).toBeInTheDocument();
    expect(screen.getByText('Internal Storage/Download/YTD/')).toBeInTheDocument();
  });

  it('renders VideoCard with language badge and title', () => {
    const onPlay = vi.fn();
    const mockVideo: VideoItem = {
      id: 'v1',
      platform: 'youtube',
      videoId: 'v123',
      title: 'Tamil Math Tricks',
      titleNative: 'கணித வித்தைகள்',
      language: 'Tamil',
      category: 'Education',
      subcategory: 'Mathematics',
      tags: ['math'],
      duration: 45,
      thumbnail: 'https://i.ytimg.com/vi/v123/hqdefault.jpg',
      channelName: 'Tamil Math',
      isFamilyFriendly: true,
      isApproved: true,
    };

    render(<VideoCard video={mockVideo} onPlay={onPlay} />);

    expect(screen.getByText('Tamil Math Tricks')).toBeInTheDocument();
    expect(screen.getByText('கணித வித்தைகள்')).toBeInTheDocument();
    expect(screen.getByText('தமிழ்')).toBeInTheDocument();
    expect(screen.getByText('45s')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Tamil Math Tricks'));
    expect(onPlay).toHaveBeenCalledWith(mockVideo);
  });
});
