import SHA256 from "crypto-js/sha256"

//Block data
class Block {
    constructor (data) {
        this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousBlockHash = ""
    }
}

//New blockchain
class BlockChain {
    constructor () {
        this.chain = [],
        this.addBlock(new Block("Genesis block"))
    }

    //Add data to block
    addBlock(newBlock) { 

        if(this.chain.length > 0){
            newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
        }

        //create hash with sha256
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }
}

let blockchain = new BlockChain();

blockchain.addBlock(new Block("test"))

let chainData = blockchain.chain;

console.log(chainData, "blockchain data")
