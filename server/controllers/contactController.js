const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Contact = mongoose.model('Contact');
const User = mongoose.model('User');
const nodemailer = require('../handlers/nodemailer');

// Create Mail Contact
exports.saveContactForm = async(req, res) => {
    const contact = new Contact({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        text: req.body.comment
    });
    const savedContact = await contact.save();
    if (savedContact && savedContact._id) {
        savedContact.dept = req.body.department;
        const infoAdmin = nodemailer.newContactForm(savedContact);
        res.json(infoAdmin);
    }
}