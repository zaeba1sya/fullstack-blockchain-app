import express, { Router } from "express";
const router = express.Router();

export default class AuthRouter {
  constructor(AuthController: any) {
    router.get("/signInFirst", AuthController.signInFirst);
    router.get("/signUp", AuthController.signUp);
    router.get("/signInSecond", AuthController.signInSecond);
    router.get("/getUserData", AuthController.getUserData);
  }
}
