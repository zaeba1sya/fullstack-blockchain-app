export default class AuthService {
    
    authRepo: any;

    constructor( AuthRepo: any ) {
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
            this.authRepo.signUp(config)
        }
        catch (e) {
            console.log(e);
        }
    }
    
}