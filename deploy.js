const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('mnemonic: ', (mnemonimc) => {
    deploy(mnemonimc);
    rl.close()
});

const deploy = async (mnemonic) => {
    const provider = new HDWalletProvider(
        mnemonic,
        'https://rinkeby.infura.io/v3/391637e507a5414a9f38f167b014f647'
    );
    
    const web3 = new Web3(provider);
    
        const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Holla']})
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to ', result.options.address);
};

