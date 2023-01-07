import { RequestHandler } from "express";
import { UserController } from "./UserController";

// POST /api/users/signup
export const signup: RequestHandler = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserController.signup(username, email, password);
    req.session.save(error => {
      if (error) {
        throw error;
      }
      req.session.logged_in = true;
      res.json({ user });
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/users/login
export const login: RequestHandler = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserController.login(username, password);
    req.session.save(error => {
      if (error) {
        throw error;
      }
      req.session.logged_in = true;
      res.json({ user });
    });
  } catch (error) {
    next(error);
  }
};
