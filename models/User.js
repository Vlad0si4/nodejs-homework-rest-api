const { Schema, model } = require("mongoose");
const { handleValidateError, runUpdateValidators } = require("./hooks");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleValidateError);

userSchema.pre("findOneAndUpdate", runUpdateValidators);

userSchema.post("findOneAndUpdate", handleValidateError);

const User = model("user", userSchema);

module.exports = User;
