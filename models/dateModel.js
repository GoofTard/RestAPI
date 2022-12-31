const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateModel = new Schema(
  {
    date: Date,
  },
  { collection: "last_month" }
);

module.exports = {
  Dates: mongoose.model("date", DateModel),
};
