import express from "express";
import App from "./app";

import AuthRepo from "./src/services/auth/repo";
import AuthController from "./src/controllers/auth";
import AuthService from "./src/services/auth";

import CabRepo from "./src/services/cab/repo";
import CabController from "./src/controllers/cab";
import CabService from "./src/services/cab";
import CabRouter from "./src/routers/cab";


import Web3Connector from "./src/Web3Connector";
import dotenv from "dotenv";
dotenv.config();

const contract = new Web3Connector().contract.methods;

const authRepo = new AuthRepo(contract);
const authService = new AuthService(authRepo);
const authController = new AuthController(authService);

const cabRepo = new CabRepo(contract);
const cabService = new CabService(cabRepo)
const cabController = new CabController(cabService);



const app = new App({
  port: Number(process.env.PORT),
  routers: [new CabRouter(cabController)],
  middleWares: [express.json()],
});

app.listen();
