const express = require('express');
const router = express.Router();
const { submitContact, getContacts, submitVolunteer, getVolunteers } = require('../controllers/formController');
const { protect, admin } = require('../middleware/auth');

router.post('/contact', submitContact);
router.get('/contact', protect, admin, getContacts);

router.post('/volunteer', submitVolunteer);
router.get('/volunteer', protect, admin, getVolunteers);

module.exports = router;
