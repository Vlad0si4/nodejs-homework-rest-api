const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "name must be require",
  }),
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
  phone: Joi.string().required().min(10).messages({
    "any.required": "missing required phone number field",
  }),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
  }),
});

module.exports = {
  contactsSchema,
  contactUpdateFavoriteSchema,
};
