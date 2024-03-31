const express = require("express");
const {
  getContacts,
  CreateContact,
  getContact,
  UpdateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);

router.route("/").get(getContacts).post(CreateContact);
router.route("/:id").get(getContact).put(UpdateContact).delete(deleteContact);

module.exports = router;
