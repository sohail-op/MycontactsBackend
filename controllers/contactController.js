const asyncHandler = require("express-async-handler");

//@des Get all contacts
//@route Get  /api/contacts
// @access Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@des Get contact
//@route GET /api/contacts/:id
// @access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
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
  res.status(201).json({ message: "Create contact" });
});

//@des Update contact
//@route PUT /api/contacts/:id
// @access Public
const UpdateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
});

//@des Delete contact
//@route DELETE /api/contacts/:id
// @access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  CreateContact,
  UpdateContact,
  deleteContact,
};
