'use strict';

const db = require('../models/index.js');

exports.listParts = async (request, response) => {
    try {
      const allParts = await db.Part.findAll();
      response.send(allParts);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };

  exports.listFilteredCategoryParts = async (request, response) => {
    try {
      const allCatParts = await db.Part.findAll({ where: { part_category: request.params.catname }});
      console.log('category name: ', request.params.catname)
      response.send(allCatParts);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };

  // Post.findAll({ where: { id: [1,2,3] // Same as using `id: { [Op.in]: [1,2,3] }`}});

  exports.listPartDetails = async (request, response) => {
    try {
      console.log(`Controller - call listPartDetails: ${request.params.id}`);
      const allPartDetails = await db.PartDetail.findAll({ where: { part_id: request.params.id }});
      response.send(allPartDetails);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };

  exports.createPart = async (request, response) => {
    console.log('Controller - createPart - request.body: ', request.body);
    try {
      await events.insertPart(request.body);
      response.status(201).send(request.body);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };
