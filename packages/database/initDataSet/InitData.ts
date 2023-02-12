import { prisma } from "../index";
import { category, TracheophytaClass, MagnoliopsidaOrder, LiliopsidaOrder, categoryIds } from "./category";
const fs = require("fs");
//need to npm install csv-parse
const { parse } = require("csv-parse");

let count = 0;
const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      count += 1;
      resolve(count);
    }, ms)
  );
//adding diseases
const DiseaseAdd = async (row: string[]) => {
  const possibleRow = await prisma.disease.findFirst({
    where: {
      commonName: row[1],
      scientificName: row[2],
    },
  });

  console.log(await sleep(1000));

  if (!!possibleRow) {
    const newImageSet = row[4].split("<<SPLIT>>").filter((x) => x && !possibleRow.images.includes(x));
    await prisma.disease.update({
      where: {
        id: possibleRow.id,
      },
      data: {
        primaryHost: [...possibleRow.primaryHost, row[0]],
        images: [...possibleRow.images, ...newImageSet],
      },
    });
  } else {
    await prisma.disease.create({
      data: {
        primaryHost: [row[0]],
        commonName: row[1],
        scientificName: row[2],
        diseaseType: row[3],
        images: [...row[4].split("<<SPLIT>>").filter((x) => x)],
        hosts: row[5],
        symptoms: row[6],
        idealConditions: row[7],
        preventionAndManagment: row[8],
        identification: row[9],
        lifeCycle: row[10],
        solutions: row[11],
        damage: row[12],
        viruses: row[13],
        title: row[14],
        description: row[15],
      },
    });
  }
};

const PlantAdd = async (row: string[]) => {
  const possibleRow = await prisma.plant.findFirst({
    where: {
      scientificName: row[7],
      commonName: row[8],
    },
  });
  console.log(count);
  count += 1;
  // console.log(await sleep(25));
  if (!!possibleRow) {
    console.log("already processed");
    await prisma.plant.update({
      where: {
        id: possibleRow.id,
      },
      data: {
        images: [...possibleRow.images, row[0]],
      },
    });
  } else {
    console.log("adding data");
    const phylum = row[10];
    let connectionIds: { id: string }[] = [];
    if (phylum === "Tracheophyta") {
      const pClass = row[12];
      if (pClass !== "Magnoliopsida" && pClass !== "Liliopsida") {
        const catName = TracheophytaClass[pClass];
        connectionIds.push(...categoryIds[catName]);
      } else if (pClass === "Magnoliopsida") {
        const order = row[14];
        const catNames = MagnoliopsidaOrder[order];
        for (const cat of catNames) {
          connectionIds.push(...categoryIds[cat]);
        }
      } else {
        const order = row[14];
        const catNames = LiliopsidaOrder[order];
        for (const cat of catNames) {
          connectionIds.push(...categoryIds[cat]);
        }
      }
      // const diseases = await prisma.disease.findMany({
      //   where: {
      //     primaryHost: {
      //       hasSome: categories,
      //     },
      //   },
      // });
      // diseases.forEach((d) => {
      //   connectionIds.push({ id: d.id });
      // });
    }
    await prisma.plant.create({
      data: {
        images: [row[0]],
        location: [row[1], row[2]],
        town: row[3],
        county: row[4],
        state: row[5],
        country: row[6],
        scientificName: row[7],
        commonName: row[8],
        kingdom: row[9],
        phylum: row[10],
        subPhylum: row[11],
        class: row[12],
        subClass: row[13],
        order: row[14],
        subOrder: row[15],
        family: row[16],
        subFamily: row[17],
        tribe: row[18],
        subTribe: row[19],
        genus: row[20],
        species: row[21],
        subSpecies: row[22],
        varietyName: row[23],
        diseases: {
          connect: connectionIds,
        },
      },
    });
  }
};

// fs pipes

// let diseases: any[] = [];
// fs.createReadStream("./plant_diseases.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", (row: any) => {
//     diseases.push(row);
//   })
//   .on("end", async () => {
//     console.log("finished");
//     for (let i = 0; i < diseases.length; i++) {
//       console.log("inhere?");
//       await DiseaseAdd(diseases[i]);
//     }
//   })
//   .on("error", (err: any) => {
//     console.log(err.message);
//   });

//adding plants

let plants: any[] = [];
fs.createReadStream("./na_plant.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", async (row: string[]) => {
    plants.push(row);
  })
  .on("end", async () => {
    console.log("process starting");
    // await PlantAdd(plants[86532 + 4595 + 6429 + 39192 + 1002]);
    console.log(plants.slice(2211 + 86532 + 4595 + 6429 + 39192 + 1002).length);
    // for (const plant of plants.slice(2211+86532 + 4595 + 6429 + 39192 + 1002)) {
    //   await PlantAdd(plant);
    // }
  })
  .on("error", (err: any) => {
    console.log(err.message);
  });

// let data: any[] = [];
// fs.createReadStream("./category/veg_diseases.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", async (row: string[]) => {
//     data.push(row[0]);
//   })
//   .on("end", async () => {
//     console.log("finished");
//     console.log(data);
//   })
//   .on("error", (err: any) => {
//     console.log(err.message);
//   });

const x = [
  "Lamiales",
  "Oxalidales",
  "Ranunculales",
  "Boraginales",
  "Ericales",
  "Nymphaeales",
  "Malpighiales",
  "Piperales",
  "Fabales",
  "Caryophyllales",
  "Saxifragales",
  "Dipsacales",
  "Asterales",
  "Gentianales",
  "Brassicales",
  "Rosales",
  "Geraniales",
  "Apiales",
  "Fagales",
  "Garryales",
  "Malvales",
  "Solanales",
  "Sapindales",
  "Cornales",
  "Myrtales",
  "Vitales",
  "Santalales",
  "Cucurbitales",
  "Laurales",
  "Zygophyllales",
  "Celastrales",
  "Proteales",
  "Magnoliales",
  "Ceratophyllales",
  "Aquifoliales",
  "Austrobaileyales",
  "Crossosomatales",
  "Gunnerales",
  "Buxales",
  "Picramniales",
  "Dilleniales",
  "Metteniusales",
  "Canellales",
];

// console.log(x.length, Object.keys(MagnoliopsidaOrder).length);
