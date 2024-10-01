import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  console.log('Upserting Songs...');

  // music and lights (sample)
  const musicAndLights = await prisma.song.upsert({
    where: { slug: 'music-and-lights' },
    update: {},
    create: {
      slug: 'music-and-lights',
      title: 'Music and Lights',
      artist: 'Imagination',
      released: new Date('1982-01-01'),
      url: 'https://youtu.be/WDuRSpJ9ARY',
    },
  });

  // gin nation (sampled in)
  const ginNation = await prisma.song.upsert({
    where: { slug: 'gin-nation' },
    update: {},
    create: {
      slug: 'gin-nation',
      title: 'Gin Nation',
      artist: 'Tiger & Woods',
      released: new Date('2009-01-01'),
      url: 'https://youtu.be/EBB6nuvxN8w',
    },
  });

  // Spændt op til lir (sampled in)
  const spendIt = await prisma.song.upsert({
    where: { slug: 'spaendt-op-til-lir' },
    update: {},
    create: {
      slug: 'spaendt-op-til-lir',
      title: 'Spændt op til lir',
      artist: 'Den Gale Pose',
      released: new Date('1998-01-01'),
      url: 'https://youtu.be/AURPDoM_73o',
    },
  });

  // disco lights (sampled in)
  const discoLights = await prisma.song.upsert({
    where: { slug: 'disco-lights' },
    update: {},
    create: {
      slug: 'disco-lights',
      title: 'Disco Lights',
      artist: 'Factor.E',
      released: new Date('1998-01-01'),
      url: 'https://youtu.be/d4QluZ0Tbpo',
    },
  });

  // you make me wanna wiggle (sample)
  const wiggle = await prisma.song.upsert({
    where: { slug: 'you-make-me-wanna-wiggle' },
    update: {},
    create: {
      slug: 'you-make-me-wanna-wiggle',
      title: 'You Make Me Wanna Wiggle',
      artist: 'Brothers Johnson',
      released: new Date('1980-01-01'),
      url: 'https://youtu.be/bQ8TCpaw4m0',
    },
  });

  // new jack (sampled in)
  const newJack = await prisma.song.upsert({
    where: { slug: 'new-jack' },
    update: {},
    create: {
      slug: 'new-jack',
      title: 'New Jack',
      artist: 'Justice',
      released: new Date('2007-01-01'),
      url: 'https://youtu.be/9f-NQZYCZnA',
    },
  });

  // elgar: enigma variations, op. 36 - ix. nimrod (sample)
  const elgar = await prisma.song.upsert({
    where: { slug: 'elgar-enigma-variations-op-36-ix-nimrod' },
    update: {},
    create: {
      slug: 'elgar-enigma-variations-op-36-ix-nimrod',
      title: 'Elgar: Enigma Variations, Op. 36 - IX. Nimrod',
      artist: 'Edward Elgar',
      released: new Date('1997-01-01'),
      url: 'https://open.spotify.com/track/2jJrIibf0GquFSv39pExNf?si=1U77ZY6BRMS6TbGGprHLNQ',
    },
  });

  // clubbed to death (sampled in)
  const clubbedToDeath = await prisma.song.upsert({
    where: { slug: 'clubbed-to-death' },
    update: {},
    create: {
      slug: 'clubbed-to-death',
      title: 'Clubbed to Death',
      artist: 'Rob Dougan',
      released: new Date('1999-01-01'),
      url: 'https://youtu.be/pFS4zYWxzNA',
    },
  });

  console.log('Upserting Samples...');

  // music and lights (sample)
  await prisma.sample.upsert({
    where: {
      songId_sampledInId: {
        songId: musicAndLights.id,
        sampledInId: ginNation.id,
      },
    },
    update: {},
    create: {
      songId: musicAndLights.id,
      sampledInId: ginNation.id,
    },
  });

  await prisma.sample.upsert({
    where: {
      songId_sampledInId: {
        songId: musicAndLights.id,
        sampledInId: spendIt.id,
      },
    },
    update: {},
    create: {
      songId: musicAndLights.id,
      sampledInId: spendIt.id,
    },
  });

  await prisma.sample.upsert({
    where: {
      songId_sampledInId: {
        songId: musicAndLights.id,
        sampledInId: discoLights.id,
      },
    },
    update: {},
    create: {
      songId: musicAndLights.id,
      sampledInId: discoLights.id,
    },
  });

  // you make me wanna wiggle (sample)
  await prisma.sample.upsert({
    where: {
      songId_sampledInId: {
        songId: wiggle.id,
        sampledInId: newJack.id,
      },
    },
    update: {},
    create: {
      songId: wiggle.id,
      sampledInId: newJack.id,
    },
  });

  // elgar: enigma variations, op. 36 - ix. nimrod (sample)
  await prisma.sample.upsert({
    where: {
      songId_sampledInId: {
        songId: elgar.id,
        sampledInId: clubbedToDeath.id,
      },
    },
    update: {},
    create: {
      songId: elgar.id,
      sampledInId: clubbedToDeath.id,
    },
  });

  console.log('Done');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
