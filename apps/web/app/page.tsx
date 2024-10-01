import Link from 'next/link';

interface Song {
  id: string;
  name: string;
  releaseDate: string;
  youtubeUrl: string;
  spotifyUrl: string;
}

const sampleSongs: Song[] = [
  {
    id: '1',
    name: 'Sample Song 1',
    releaseDate: '2023-05-15',
    youtubeUrl: 'https://youtube.com/watch?v=sample1',
    spotifyUrl: 'https://open.spotify.com/track/sample1',
  },
  {
    id: '2',
    name: 'Sample Song 2',
    releaseDate: '2023-06-20',
    youtubeUrl: 'https://youtube.com/watch?v=sample2',
    spotifyUrl: 'https://open.spotify.com/track/sample2',
  },
  {
    id: '3',
    name: 'Sample Song 3',
    releaseDate: '2023-07-01',
    youtubeUrl: 'https://youtube.com/watch?v=sample3',
    spotifyUrl: 'https://open.spotify.com/track/sample3',
  },
];

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Latest Samples</h1>
      <ul className="space-y-4">
        {sampleSongs.map((song) => (
          <li key={song.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold">{song.name}</h2>
            <p className="text-gray-600">Released: {song.releaseDate}</p>
            <div className="mt-2 space-x-2">
              <a
                href={song.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline">
                YouTube
              </a>
              <a
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline">
                Spotify
              </a>
            </div>
            <Link
              href={`/sample/${song.id}`}
              className="mt-2 inline-block text-indigo-600 hover:underline">
              View Sample Details
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
