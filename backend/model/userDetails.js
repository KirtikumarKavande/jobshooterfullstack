const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userDetails = new Schema({
  country: { type: String },
  state: { type: String },
  city: { type: String },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("userDetails", userDetails);
