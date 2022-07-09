'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Materials', [{
      name: "Brava za vrata rashladne komore 7325CQ DIS 80268",
      supplierCode: "INTERCLIMA",
      supplierItemNumber: "7325CQ DIS 80268",
      itemNumber: "A000034",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Brava za vrata rashladne komore - kacenje 72/87 7000DIS.80180",
      supplierCode: "INTERCLIMA",
      supplierItemNumber: "7000DIS.80180",
      itemNumber: "A000037",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Sarke za vrata komore 2930 67/90",
      supplierCode: "INTERCLIMA",
      supplierItemNumber: "2930 67/90",
      itemNumber: "A000040",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Brava za vrata rashladne komore - podmetač 50/69 7000 DIS.80216",
      supplierCode: "INTERCLIMA",
      supplierItemNumber: "7000 DIS.80216",
      itemNumber: "A000036",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Profil PVC - krila vrata R-4119 L=4m",
      supplierCode: "LOMBARDINI",
      supplierItemNumber: "R-4119",
      itemNumber: "A002507",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Keder gumeni - vrata rubber gasket 41-A black DSU",
      supplierCode: "PILOUS",
      supplierItemNumber: "41-A BLACK",
      itemNumber: "A053081",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Profil PVC - za metlicu DBP43 L=5.8m",
      supplierCode: "CASTLE ENG",
      supplierItemNumber: "DBP43",
      itemNumber: "A002562",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Keder gumeni metlica 47-B",
      supplierCode: "PILOUS",
      supplierItemNumber: "47-B",
      itemNumber: "A053756",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Lim poc. 1.25 DX51D+Z275 1,25x1500x3000 mm",
      supplierCode: "PILOUS",
      supplierItemNumber: "EN10346",
      itemNumber: "A003123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Rekuperator rotacioni RRU-ECO-E-E18-1300/1300-1250-depth 290",
      supplierCode: "KLING GMBH",
      supplierItemNumber: "R-DEPTH 290",
      itemNumber: "A054417",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Rekuperator dijagonalni RRU-ECO-E-E18-1300/1300-1250-depth 290",
      supplierCode: "KLING GMBH",
      supplierItemNumber: "D-DEPTH 290",
      itemNumber: "A054418",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Ventilator radijalni sa EC Motorom ZA-Bbluefin",
      supplierCode: "ZIEHL-ABEG",
      supplierItemNumber: "116909/A01",
      itemNumber: "A047132",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Hladnjak bat CW 12 3329S2,4 35T1880 3R",
      supplierCode: "ZIEHL-ABEG",
      supplierItemNumber: "35T1880 3R",
      itemNumber: "A050686",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

    await queryInterface.bulkInsert('Stocks', [{
      id: 1,
      unit: 'kom',
      count: 500,
      capacity: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      unit: 'kom',
      count: 500,
      capacity: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      unit: 'kom',
      count: 500,
      capacity: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      unit: 'kom',
      count: 500,
      capacity: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      unit: 'm',
      count: 1000,
      capacity: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      unit: 'm',
      count: 1000,
      capacity: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      unit: 'm',
      count: 1000,
      capacity: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      unit: 'm',
      count: 1000,
      capacity: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      unit: 'kg',
      count: 5000,
      capacity: 5000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      unit: 'kom',
      count: 250,
      capacity: 250,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      unit: 'kom',
      count: 250,
      capacity: 250,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      unit: 'kom',
      count: 250,
      capacity: 250,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      unit: 'kom',
      count: 250,
      capacity: 250,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};