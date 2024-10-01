import Link from 'next/link';
import prisma from '@/lib/db';

export default async function Home() {
  const sampleSongs = await prisma.song.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      samples: {
        some: {}, // at least is being sampled once
      },
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Latest Samples</h1>
      <ul className="space-y-4">
        {sampleSongs.map((song) => (
          <li key={song.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-600">
              Released: {song.released.getFullYear()}
            </p>
            <div className="mt-2 space-x-2">
              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline">
                Link
              </a>
            </div>
            <Link
              href={`/sample/${song.slug}`}
              className="mt-2 inline-block text-indigo-600 hover:underline">
              View Sample Details
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
