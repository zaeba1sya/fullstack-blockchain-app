import express from 'express';
import App from './app';
// const authRouters = require("./routers/auth.routes");
import CabRouter from './src/routers/cab.routes';

const app = new App({
  port: 7000,
  routers: [
      new CabRouter(),
  ],
  middleWares: [
      express.json()
  ],
});

app.listen();
