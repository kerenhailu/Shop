const mongoose = require("mongoose");
const schama = mongoose.Schema;
const User = new schama(
  {
    FullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password : { type: String, required: true },
    isAdmin : { type: Boolean },
    img : { type: String},
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
