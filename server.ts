import express from "express";
import App from "./app";

import AuthRepo from "./src/services/auth/repo";
import AuthController from "./src/controllers/auth";
import AuthService from "./src/services/auth";
import AuthRouter from "./src/routers/auth";


import Web3Connector from "./src/Web3Connector";
import dotenv from "dotenv";
dotenv.config();

const contract = new Web3Connector().contract.methods;

const authRepo = new AuthRepo(contract);
const authService = new AuthService(authRepo);
const authController = new AuthController(authService);

const app = new App({
  port: Number(process.env.PORT),
  routers: [new AuthRouter(authController)],
  middleWares: [express.json()],
});

app.listen();
