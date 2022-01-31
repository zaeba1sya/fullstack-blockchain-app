export default class CabService {
    CabRepo: any;

    constructor( CabRepo: any ) {
        this.CabRepo = CabRepo;   
    }

    personalCab = async () => {
        return await this.CabRepo.getUserData();
    }

    mainPage = async () => {
        
    }
}