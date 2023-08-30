const { Schema, model } = require("mongoose");
const { handleValidateError, runUpdateValidators } = require("./hooks");

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

ContactSchema.post("save", handleValidateError);

ContactSchema.pre("findOneAndUpdate", runUpdateValidators);

ContactSchema.post("findOneAndUpdate", handleValidateError);

const Contact = model("contact", ContactSchema);

module.exports = Contact;
