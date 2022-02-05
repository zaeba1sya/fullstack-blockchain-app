export default class AuthService {
  authRepo: any;

  constructor(AuthRepo: any) {
    this.authRepo = AuthRepo;
  }

  signUp = async (config: {
    login: string;
    addr: string;
    wallet: string;
    fio: string;
    password: string;
    authCode: string;
  }) => {
    try {
      return await this.authRepo.signUp(config);
    } catch (e) {
      console.log(e);
    }
  };

  signInFirst = async (config: { login: string; password: string }) => {
    try {
      return await this.authRepo.signInFirst(config.login, config.password);
    } catch (e) {
      console.log(e);
    }
  };

  signInSecond = async (config: { login: string; authCode: string }) => {
    try {
      return await this.authRepo.signInSecond(config.login, config.authCode);
    } catch (e) {
      console.log(e);
    }
  };

  getUserData = async (config: { address: string }) => {
    try {
      return await this.authRepo.getUserData(config.address);
    } catch (e) {
      console.log(e);
    }
  };
}
