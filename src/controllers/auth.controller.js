require("dotenv").config();

const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.ecommerce.models.user;

const _createToken = ({ email, id }) => {
  return jwt.sign({ email, id }, process.env.SECRET);
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return;
    }

    const user = await User.findOne({
      where: {
        email,
      },
    }).select("+password");

    if (!user || password != user.password) {
      return;
    }

    const token = _createToken(user);

    user.password = undefined;

    res.status(200).json({
      status: "OK",
      authorization: token,
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  // extracts req.body atributes and creates a new user
};
