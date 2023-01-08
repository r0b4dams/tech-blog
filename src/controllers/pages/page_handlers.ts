import { RequestHandler } from "express";

export const home: RequestHandler = async (req, res, next) => {
  try {
    // get all posts
    // include their user
    res.status(200).json({ message: "HOMEPAGE VIEW" });
  } catch (error) {
    next(error);
  }
};

export const dashboard: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "DASHBOARD VIEW" });
  } catch (error) {
    next(error);
  }
};

export const signup: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "SIGNUP VIEW" });
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "LOGIN VIEW" });
  } catch (error) {
    next(error);
  }
};

export const singlePost: RequestHandler = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const { user_id } = req.session;
    res.status(200).json({ message: "SINGLE POST VIEW" });
  } catch (error) {
    next(error);
  }
};

export const code404: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "404 NOT FOUND VIEW" });
  } catch (error) {
    next(error);
  }
};
