import express, { Router } from 'express';
const router = express.Router()

export default class CabRouter {
    constructor( CabController: any ) {
        router.get('/', CabController.mainPage );
        router.get('/personal', CabController.personalCab)
    }
}