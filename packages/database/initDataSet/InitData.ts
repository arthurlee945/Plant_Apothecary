import { prisma } from "../index";
const fs = require("fs");
//need to npm install csv-parse
const { parse } = require("csv-parse");

/** 
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
    await prisma.disease.update({
      where: {
        id: possibleRow.id,
      },
      data: {
        primaryHost: [...possibleRow.primaryHost, row[0]],
      },
    });
  } else {
    await prisma.disease.create({
      data: {
        primaryHost: [row[0]],
        commonName: row[1],
        scientificName: row[2],
        diseaseType: row[3],
        images: [row[4]],
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

let diseases: any[] = [];
fs.createReadStream("./plant_diseases.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", (row: any) => {
    diseases.push(row);
  })
  .on("end", async () => {
    console.log("finished");
    for (let i = 0; i < diseases.length; i++) {
      console.log("inhere?");
      await DiseaseAdd(diseases[i]);
    }
  })
  .on("error", (err: any) => {
    console.log(err.message);
  });
*/

//adding plants
// fs.createReadStream("./na_plant.csv.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", async (row: string[]) => {
//     const possibleRow = await prisma.disease.findFirst({
//       where: {
//         commonName: row[1],
//         scientificName: row[2],
//       },
//     });

//     if (!!possibleRow) {
//       await prisma.disease.update({
//         where: {
//           id: possibleRow.id,
//         },
//         data: {
//           primaryHost: [...possibleRow.primaryHost, row[0]],
//         },
//       });
//     } else {
//       await prisma.disease.create({
//         data: {
//           primaryHost: [row[0]],
//           commonName: row[1],
//           scientificName: row[2],
//           diseaseType: row[3],
//           images: [row[4]],
//           hosts: row[5],
//           symptoms: row[6],
//           idealConditions: row[7],
//           preventionAndManagment: row[8],
//           identification: row[9],
//           lifeCycle: row[10],
//           solutions: row[11],
//           damage: row[12],
//           viruses: row[13],
//           title: row[14],
//           description: row[15],
//         },
//       });
//     }
//   })
//   .on("end", () => {
//     console.log("finished");
//   })
//   .on("error", (err: any) => {
//     console.log(err.message);
//   });
