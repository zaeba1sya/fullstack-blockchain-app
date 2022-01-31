import Web3Connector from "../../../Web3Connector";

export default class CabRepo {

    Contract: any;
    
    constructor( contract: any ) {
        this.Contract = contract;
    }

    getUserData = async () => {
        return await this.Contract.getUserData().call();
    }
    
}