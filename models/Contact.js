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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
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
