-- CreateTable
CREATE TABLE "Song" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "released" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sample" (
    "songId" UUID NOT NULL,
    "sampledInId" UUID NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("songId","sampledInId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Song_slug_key" ON "Song"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Song_url_key" ON "Song"("url");

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_sampledInId_fkey" FOREIGN KEY ("sampledInId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
