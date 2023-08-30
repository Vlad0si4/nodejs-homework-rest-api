const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody } = require("../../decorators");
const { isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");
const addContactsValidate = validateBody(schemas.contactsSchema);
const contactUpdateFavoriteValidate = validateBody(
  schemas.contactUpdateFavoriteSchema
);

router.get("/", ctrl.getListContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", addContactsValidate, ctrl.add);

router.delete("/:id", isValidId, ctrl.delContact);

router.put("/:id", isValidId, addContactsValidate, ctrl.updContact);

router.patch(
  "/:id/favorite",
  isValidId,
  contactUpdateFavoriteValidate,
  ctrl.updateStatusContact
);

module.exports = router;
