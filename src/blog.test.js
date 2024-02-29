import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect extension

import Blog from './Blog'

// Mocking the custom hooks
jest.mock('./Hooks/UseFetchBlogs');
jest.mock('./Hooks/UseFetchFeaturedBlog');

describe('Blog Component', () => {
  test('renders featured blog section', async () => {
    // Mocking data for featured blog
    const featuredBlogData = {
      error: null,
      data: {
        data: [{ _id: '1', title: 'Featured Blog 1' }, { _id: '2', title: 'Featured Blog 2' }],
      },
      isLoading: false,
    };

    // Mocking the hook response
    jest.spyOn(require('./Hooks/UseFetchFeaturedBlog'), 'default').mockImplementation(() => featuredBlogData);

    render(<Blog />);

    // Ensure that the loading spinner is not displayed
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });

    // Ensure that featured blog titles are rendered
    expect(screen.getByText('Featured Blog')).toBeInTheDocument();
    expect(screen.getByText('Featured Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Featured Blog 2')).toBeInTheDocument();
  });

  test('renders recent blog section', async () => {
    // Mocking data for recent blogs
    const recentBlogData = {
      error: null,
      data: {
        data: [
          { _id: '3', title: 'Recent Blog 1' },
          { _id: '4', title: 'Recent Blog 2' },
          { _id: '5', title: 'Recent Blog 3' },
          { _id: '6', title: 'Recent Blog 4' },
          { _id: '7', title: 'Recent Blog 5' },
        ],
      },
      isLoading: false,
    };

    // Mocking the hook response
    jest.spyOn(require('./Hooks/UseFetchBlogs'), 'default').mockImplementation(() => recentBlogData);

    render(<Blog />);

    // Ensure that the loading spinner is not displayed
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });

    // Ensure that recent blog titles are rendered
    expect(screen.getByText('Recent Blog')).toBeInTheDocument();
    expect(screen.getByText('Recent Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Recent Blog 2')).toBeInTheDocument();
    expect(screen.getByText('Recent Blog 3')).toBeInTheDocument();
    expect(screen.getByText('Recent Blog 4')).toBeInTheDocument();
    expect(screen.getByText('Recent Blog 5')).toBeInTheDocument();
  });

  test('handles no featured blog found', async () => {
    // Mocking empty data for featured blog
    const featuredBlogData = {
      error: null,
      data: { data: [] },
      isLoading: false,
    };

    // Mocking the hook response
    jest.spyOn(require('./Hooks/UseFetchFeaturedBlog'), 'default').mockImplementation(() => featuredBlogData);

    render(<Blog />);

    // Ensure that the loading spinner is not displayed
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });

    // Ensure that no featured blog message is rendered
    expect(screen.getByText('No Featured Blog Found')).toBeInTheDocument();
  });
});
