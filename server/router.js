const router = require('express').Router();

const parts = require('./controllers/parts');

router.get('/parts/', parts.listParts);
router.get('/parts/category/:catname', parts.listFilteredCategoryParts);
router.get('/partdetails/:id', parts.listPartDetails);

//router.post('/parts', parts.createPart);

module.exports = router;