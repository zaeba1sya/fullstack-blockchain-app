import {Request, Response} from 'express';

export default class CabController {
    
    Cab: any;
    constructor( CabRepo: any ) {
        this.Cab = CabRepo;
    }

    mainPage = async ( req: Request, res: Response ) => {
        try {
            await this.Cab.mainPage();
        }
        catch(e) {

        }
    }

    personalCab = async ( req: Request, res: Response ) => {
        try {
            await this.Cab.personalCab();
        } catch(e) {

        }
    }
}