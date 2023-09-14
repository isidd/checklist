const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  this.password = "7tr4 bwdlskjc8374tri34urhfiudscwknd";
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
