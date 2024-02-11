const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");

//@des Get all contacts
//@route Get  /api/contacts
// @access Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ contacts });
});

//@des Get contact
//@route GET /api/contacts/:id
// @access Public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ contact });
});

//@des Create contact
//@route POST /api/contacts
// @access Public
const CreateContact = asyncHandler(async (req, res) => {
  console.log(`The body is: `, req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide the required fields");
  }
  const contact = await Contact.create({ name, email, phone });

  res.status(201).json({ contact });
});

//@des Update contact
//@route PUT /api/contacts/:id
// @access Public
const UpdateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ updatedContact });
});

//@des Delete contact
//@route DELETE /api/contacts/:id
// @access Public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const deletedContact = await Contact.findByIdAndDelete(
    req.params.id,
    req.body
  );

  res.status(200).json({ deleteContact });
});

module.exports = {
  getContacts,
  getContact,
  CreateContact,
  UpdateContact,
  deleteContact,
};
