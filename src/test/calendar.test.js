import App from '../App';
import React from 'react';
import { render, screen } from '@testing-library/react'; // (or /dom, /vue, ...)
import Calendar from '../components/calendar';

describe('Chocolate Calendar', () => {
  test('Renders App Component Correctly', async () => {
    render(<App />);
    expect(Calendar).toBeInTheDocument('1');
  });

  // Test for trying out Jest
  it('Fetches Days from 1 to 31 from API', async () => {
    // I want code here to test if the fetch API works
  });

  //   it('When day passes or has passed then Calendar Day Box opens.');

  //   it('Chocolate can be eaten if Calendar Day Box is open.');
});
