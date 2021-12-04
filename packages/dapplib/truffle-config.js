require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rice noise million include praise army gentle'; 
let testAccounts = [
"0x9d2cb4060d7c63dc42d70893f1a8acf2cd182c9b840a1f8306a986dc030e2114",
"0xfc1f56c84b9c693092555e3750d5ac5310346ebc604aee142b82c7644e0f982a",
"0x73e259b6672d980ded68a270b2598e543ce03a774f56194ea7e888599736b55f",
"0xc3c6b1c933f5e4036fcbcba801007cec47de9dc4259e4d676e433d0983c37eb1",
"0xbc60b66afd410d6895c4917a68bbb65929b1ee4192ceda5d3095758d0bfba8f9",
"0x4e6271ec2a66e263a9c7761d69ec1fbe7bf502da4a176c1f4391e3f5e314f299",
"0x859315645ee9f44bcd0d12600d33753fe4ba39eb4a600db8cfdf3b9847afbf93",
"0x05c22af5d024048ae80d9e2292408f8fc8637d26506e0bc0d122423be970d504",
"0x56a01a2011024995df7a8253a2a68d9a72d8920fab31b7e8c49e1f77109c733d",
"0x37af9b3b93fb27dc358d3465e13a9bbd9270951a2b6ed0de172fd5511b1fed1c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

