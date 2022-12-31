const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: String,
    items: Array,
    usages: Object,
    total: Number,
  },
  { collection: "users" }
);

module.exports = {
  Users: mongoose.model("Users", UserSchema),
};
