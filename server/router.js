const router = require('express').Router();

const parts = require('./controllers/parts');

router.get('/parts', parts.listParts);
router.get('/partdetails/:id', parts.listPartDetails);

//router.post('/parts', parts.createPart);

module.exports = router;