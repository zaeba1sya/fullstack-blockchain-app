export default class AuthRepo {
  Contract: any;

  constructor(contract: any) {
    this.Contract = contract;
  }

  signUp = async (config: {
    login: string;
    addr: string;
    wallet: string;
    fio: string;
    password: string;
    authCode: string;
  }) => {
    return await this.Contract.registerUser(
      config.login,
      config.addr,
      config.wallet,
      config.fio,
      config.password,
      config.authCode
    ).send({ from: config.addr });
  };

  signInFirst = async (config: { login: string; password: string }) => {
    return await this.Contract.firstLogin(config.login, config.password).call();
  };

  signInSecond = async (config: { login: string; authCode: string }) => {
    return await this.Contract.tryLogin(config.login, config.authCode).call();
  };

  getUserData = async (config: { address: string }) => {
    return await this.Contract.usersInfo(config.address).call();
  };
}
