const express = require("express");
const { Users } = require("./models/usersModel");
const { Dates } = require("./models/dateModel");
const router = express.Router();

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

router.get("/last_month", async (req, res) =>
  res.json(await Dates.findOne({}, "date").lean().exec())
);

router.put("/last_month", async (req, res) => {
  try {
    await Dates.updateOne(
      {},
      { $set: { date: new Date(now.getFullYear(), now.getMonth(), 1) } }
    ).exec();

    res.sendStatus(STATUS_OK);
  } catch (ex) {
    res.sendStatus(STATUS_BAD_REQUEST);
  }
});

router.get("/users", async (req, res) =>
  res.json(await Users.find({}).lean().exec())
);

router.get("/users/:id", async (req, res) =>
  res.json(await Users.findOne({ id: req.params.id }).lean().exec())
);

router.post("/users/:id", async (req, res) => {
  try {
    await Users.insertMany([
      {
        id: req.params.id,
        items: [],
        total: 0,
        usages: {},
      },
    ]);

    res.sendStatus(STATUS_OK);
  } catch (ex) {
    res.sendStatus(STATUS_BAD_REQUEST);
  }
});

router.put("/users/:id/", async (req, res) => {
  try {
    await Users.updateOne({ id: req.params.id }, req.body.query);
    res.sendStatus(STATUS_OK);
  } catch (ex) {
    res.sendStatus(STATUS_BAD_REQUEST);
  }
});

module.exports = router;
