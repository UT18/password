const express = require('express')
const router = express.Router()
const websiteController =   require('../controller/website.controller');
// Create new
router.post('/', websiteController.create);
// Retrieve with id
router.get('/:id', websiteController.findById);

module.exports = router