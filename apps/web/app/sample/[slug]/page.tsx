import Link from 'next/link';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';

export default async function SampleDetails({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const originalSample = await prisma.song.findUnique({
    where: {
      slug,
    },
    include: {
      samples: true,
    },
  });

  const sampledSongs = await prisma.song.findMany({
    where: {
      id: {
        in: originalSample?.samples?.map((sample) => sample?.sampledInId),
      },
    },
  });

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
          Sample Details for: {originalSample?.title}
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Songs using this sample:
        </h2>
        <ul className="space-y-4">
          {sampledSongs.map((song) => (
            <li key={song.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl font-semibold">{song.title}</h3>
              <p className="text-gray-600">Artist: {song.artist}</p>
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
