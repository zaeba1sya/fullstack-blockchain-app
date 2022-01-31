import Web3 from "web3";
import {abi} from "./ABI";
import dotenv from 'dotenv';
import { Provider } from "web3/providers";
dotenv.config();

const address: string = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

class Web3Connector {
    private web3 = new Web3(process.env.WEB3_HOST as any)
    public contract = new this.web3.eth.Contract(abi, address);
}

export default Web3Connector;