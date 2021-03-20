const db = require("../models");
const User = db.ecommerce.models.user;

exports.getUser = async (req, res) => {
  res.send({
    mesage: "ok",
  });
};
