import express from 'express';
import {Request, Response} from 'express';

class CabRouter {
    router = express.Router()

    constructor() {
        this.initRouter();
    }

    initRouter() {
        this.router.get('/', this.mainPage)
        this.router.get('/personal', this.personalCab)
    }

    personalCab = (req: Request, res: Response) => {
        res.render('index', {user: 'Danya', age: 19});
    }

    mainPage = (req: Request, res: Response) => {
        res.render('')
    }
}

export default CabRouter;