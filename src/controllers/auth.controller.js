import "dotenv/config";

import { sign } from "jsonwebtoken";
import { ecommerce } from "../models";
import { createUser } from "./user.controller";

const User = ecommerce.models.user;

const _createToken = ({ email, id }) => {
  return sign({ email, id }, process.env.SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return;
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

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
}

export async function register(req, res, next) {
  try {
    createUser(req, res, next);
  } catch (err) {
    next(err);
  }
}
