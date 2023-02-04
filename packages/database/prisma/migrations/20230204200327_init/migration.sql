-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" TEXT NOT NULL,
    "image" TEXT[],
    "location" TEXT[],
    "town" TEXT,
    "county" TEXT,
    "state" TEXT,
    "country" TEXT,
    "scientificName" TEXT,
    "commonName" TEXT,
    "kingdom" TEXT,
    "phylum" TEXT,
    "class" TEXT,
    "subClass" TEXT,
    "order" TEXT,
    "subOrder" TEXT,
    "family" TEXT,
    "subFamily" TEXT,
    "tribe" TEXT,
    "subTribe" TEXT,
    "genus" TEXT,
    "species" TEXT,
    "subSpecies" TEXT,
    "varietyName" TEXT,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "id" TEXT NOT NULL,
    "primaryHost" TEXT[],
    "commonName" TEXT,
    "scientificName" TEXT,
    "diseaseType" TEXT,
    "images" TEXT[],
    "hosts" TEXT,
    "symptoms" TEXT,
    "idealConditions" TEXT,
    "preventionAndManagment" TEXT,
    "identification" TEXT,
    "lifeCycle" TEXT,
    "solutions" TEXT,
    "damage" TEXT,
    "viruses" TEXT,
    "title" TEXT,
    "description" TEXT,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlantToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DiseaseToPlant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PlantToUser_AB_unique" ON "_PlantToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PlantToUser_B_index" ON "_PlantToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DiseaseToPlant_AB_unique" ON "_DiseaseToPlant"("A", "B");

-- CreateIndex
CREATE INDEX "_DiseaseToPlant_B_index" ON "_DiseaseToPlant"("B");

-- AddForeignKey
ALTER TABLE "_PlantToUser" ADD CONSTRAINT "_PlantToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlantToUser" ADD CONSTRAINT "_PlantToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToPlant" ADD CONSTRAINT "_DiseaseToPlant_A_fkey" FOREIGN KEY ("A") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToPlant" ADD CONSTRAINT "_DiseaseToPlant_B_fkey" FOREIGN KEY ("B") REFERENCES "Plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
