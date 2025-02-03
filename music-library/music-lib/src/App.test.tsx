import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe("bootstrap", () => {
    test('renders Music Library heading', () => {
        render(<App />);
        const headingElement = screen.getAllByText(/Music Library/i)[0];
        expect(headingElement).toBeInTheDocument();
    });

    test('renders MusicLibrary component', () => {
        render(<App />);
        const musicLibraryElement = screen.getAllByRole('heading', { level: 2 })[0];
        expect(musicLibraryElement).toBeInTheDocument();
    });
});