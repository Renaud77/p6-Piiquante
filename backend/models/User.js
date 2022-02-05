const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const validator = require("email-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

validator.validate("test@email.com");

userSchema.plugin(uniqueValidator);

// on export le model avec le nom User
module.exports = mongoose.model("User", userSchema);
