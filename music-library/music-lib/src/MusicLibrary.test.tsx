import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MusicLibrary from "./MusicLibrary";
import { songs } from "./data/songs";

jest.mock("./data/songs", () => ({
    songs: [
        { id: 1, title: "Song A", artist: "Artist 1", album: "Album X" },
        { id: 2, title: "Song B", artist: "Artist 2", album: "Album Y" },
        { id: 3, title: "Song C", artist: "Artist 1", album: "Album X" },
        { id: 4, title: "Song D", artist: "Artist 3", album: "Album Z" },
    ],
}));

describe("MusicLibrary", () => {
    test("renders Music Library title", () => {
        render(<MusicLibrary />);
        expect(screen.getByText("Music Library")).toBeInTheDocument();
    });

    test("filters songs based on input", () => {
        render(<MusicLibrary />);
        const input = screen.getByPlaceholderText("Search by title, artist, or album...");
        fireEvent.change(input, { target: { value: "Song A" } });
        expect(screen.getByText("Song A - Artist 1 (Album X)")).toBeInTheDocument();
        expect(screen.queryByText("Song B - Artist 2 (Album Y)")).not.toBeInTheDocument();
    });

    test("groups songs by artist", () => {
        render(<MusicLibrary />);
        const groupBySelect = screen.getByLabelText(/Group By/i);
        fireEvent.change(groupBySelect, { target: { value: 'artist' } });
        const artistGroup = screen.getByRole('heading', { name: /Artist 1/i });
        expect(artistGroup).toBeInTheDocument();
    });

    test("sorts songs by title", () => {
        render(<MusicLibrary />);
        const sortBySelect = screen.getByLabelText(/Sort By/i);
        fireEvent.change(sortBySelect, { target: { value: "title" } });
        const sortedSongs = screen.getAllByRole("listitem");
        expect(sortedSongs[0]).toHaveTextContent("Song A - Artist 1 (Album X)");
        expect(sortedSongs[1]).toHaveTextContent("Song B - Artist 2 (Album Y)");
    });
});