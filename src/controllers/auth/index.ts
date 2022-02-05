import { Request, Response } from "express";
export default class AuthController {
  Auth: any;
  constructor(AuthService: any) {
    this.Auth = AuthService;
  }

  signUp = async (req: Request, res: Response) => {
    try {
      const { login, addr, wallet, fio, password, authCode }: any = req.body;
      await this.Auth.signUp({ login, addr, wallet, fio, password, authCode });
      return res.status(200).send(JSON.stringify({ message: "Good" }));
    } catch (e) {
      // res.status(500).send(JSON.stringify({message: e}))
      console.log(e);
    }
  };

  signInFirst = async (req: Request, res: Response) => {
    try {
      const { login, password }: any = req.body;
      await this.Auth.signInFirst({ login, password });
      return res.status(200).send(JSON.stringify({ message: "Good" }));
    } catch (e) {
      console.log(e);
    }
  };

  signInSecond = async (req: Request, res: Response) => {
    try {
      const { login, authCode }: any = req.body;
      await this.Auth.signInSecond({ login, authCode });
      return res.status(200).send(JSON.stringify({ message: "Good" }));
    } catch (e) {
      console.log(e);
    }
  };

  getUserData = async (req: Request, res: Response) => {
    try {
      const { address }: any = req.body;
      await this.Auth.getUserData({ address });
      return res.status(200).send(JSON.stringify({ message: "Good" }));
    } catch (e) {
      console.log(e);
    }
  };
}
