const Contact = require('../models/Contact');
const Volunteer = require('../models/Volunteer');

// @desc    Submit Contact Form
// @route   POST /api/forms/contact
// @access  Public
const submitContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({ message: 'Message sent successfully', contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get All Contact Submissions
// @route   GET /api/forms/contact
// @access  Private (Admin)
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Submit Volunteer Application
// @route   POST /api/forms/volunteer
// @access  Public
const submitVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.create(req.body);
        res.status(201).json({ message: 'Application submitted successfully', volunteer });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get All Volunteer Applications
// @route   GET /api/forms/volunteer
// @access  Private (Admin)
const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find().sort({ createdAt: -1 });
        res.status(200).json(volunteers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    submitContact,
    getContacts,
    submitVolunteer,
    getVolunteers
};
