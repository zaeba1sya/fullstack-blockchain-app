import express from 'express';
import {Application} from 'express';

class App {
  app: Application;
  port: number;

  constructor(config: {port: number, routers: any, middleWares: any}) {
    this.app = express();
    this.port = config.port;
    this.middleWares(config.middleWares);
    this.routes(config.routers);
  }

  middleWares(middleWares: any) {
    middleWares.forEach((middleWare: any) => {
      this.app.use(middleWare);
    });
    this.app.set("views", "./src/views");
    this.app.set("view engine", "pug");
  }

  routes(routes: any) {
    routes.forEach((controller: any) => {
      this.app.use("/", controller.router);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listen port: ${this.port}`);
    });
  }
}

export default App;
