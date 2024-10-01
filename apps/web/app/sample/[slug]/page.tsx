import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SampleSong {
  id: string;
  name: string;
  artist: string;
  releaseDate: string;
}

const sampleSongs: SampleSong[] = [
  {
    id: '1',
    name: 'Original Sample 1',
    artist: 'Artist A',
    releaseDate: '2020-01-15',
  },
  {
    id: '2',
    name: 'Original Sample 2',
    artist: 'Artist B',
    releaseDate: '2019-11-20',
  },
  {
    id: '3',
    name: 'Original Sample 3',
    artist: 'Artist C',
    releaseDate: '2021-03-05',
  },
];

export default function SampleDetails({ params }: { params: { id: string } }) {
  const sampleId = params.id;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Sample List
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">
          Sample Details for ID: {sampleId}
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Songs using this sample:
        </h2>
        <ul className="space-y-4">
          {sampleSongs.map((song) => (
            <li key={song.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl font-semibold">{song.name}</h3>
              <p className="text-gray-600">Artist: {song.artist}</p>
              <p className="text-gray-600">Released: {song.releaseDate}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">Back to Latest Samples</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
