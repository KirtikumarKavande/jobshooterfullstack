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

  role: { type: String },
  jobTitle: { type: String },
  employmentType: { type: String },
  recentCompany: { type: String },
});

module.exports = mongoose.model("userDetails", userDetails);
