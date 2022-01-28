import Web3 from "web3";
import {abi} from "./ABI";

const address: string = '';

class Web3Connector {
    web3 = new Web3('http://localhost:8545')
    contract = new this.web3.eth.Contract(abi, address);


}

export default Web3Connector;