import React, { useState } from "react";
import  { songs }  from "./data/songs";
import './bootstrap.css';
interface Song {
  title: string;
  artist: string;
  album: string;
}

const mockSongs: Song[] = [
  { title: "Song A", artist: "Artist 1", album: "Album X" },
  { title: "Song B", artist: "Artist 2", album: "Album Y" },
  { title: "Song C", artist: "Artist 1", album: "Album X" },
  { title: "Song D", artist: "Artist 3", album: "Album Z" },
];

const MusicLibrary: React.FC  = () => {
  const [filter, setFilter] = useState<string>("");
  const [groupBy, setGroupBy] = useState<"album" | "artist" | "title" | "">("");
  const [sortBy, setSortBy] = useState<"album" | "artist" | "title" | "">("");

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(filter.toLowerCase()) ||
      song.artist.toLowerCase().includes(filter.toLowerCase()) ||
      song.album.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedSongs = groupBy
  ? filteredSongs.reduce((acc, song) => {
      const key = song[groupBy];
      acc[key] = acc[key] || [];
      acc[key].push(song);
      return acc;
    }, {} as Record<string, typeof songs>)
  : { All: filteredSongs };

// Sort Songs
const sortedGroups = Object.entries(groupedSongs).map(([group, groupSongs]) => {
  const sortedSongs = sortBy
    ? groupSongs.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : groupSongs;
  return { group, songs: sortedSongs };
});

return (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Music Library</h1>

    <input
      type="text"
      placeholder="Search by title, artist, or album..."
      className="border border-gray-300 rounded-md px-4 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />

    <div className="flex gap-4 mb-4">
    <label htmlFor="groupBy" className="sr-only">Group By</label>
      <select
        id="groupBy"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value as "album" | "artist" | "title" | "")}
      >
        <option value="">Group By</option>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="title">Title</option>
      </select>
      <label htmlFor="sortBy" className="sr-only">Sort By</label>
      <select
                id="sortBy"
        className="border px-2 py-1"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as "album" | "artist" | "title" | "")}
      >
        <option value="">Sort By</option>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="title">Title</option>
      </select>
    </div>

    {sortedGroups.map(({ group, songs }) => (
      <div key={group} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{group}</h2>
        <ul className="list-disc pl-6">
          {songs.map((song) => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.album})
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
};

export default MusicLibrary;