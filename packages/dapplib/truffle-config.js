require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember snake imitate prize flower tumble'; 
let testAccounts = [
"0x2beb8807d97f9a3f277e98de88a25f370a060cef9754d166bc80ff61151935ce",
"0x3a554bb4b0581f3839e66bbc1a43403e904f120f028e37b0d8962e0de515028a",
"0xfbe2866fe218e195ed24a5d9ca2822d57c7a6f60fdc159595ddde9976c597a45",
"0x8a62aa63fb3c10b3c24eb592c0b373513e8d83d169ecfe33c1f545bb2cb8c7ff",
"0xe287f1663b8e5538caaddac294d4392c1329231ee84ed2d199eec4186c4585c9",
"0xf2f138928393bd227bdbfd2184b91dc72bf500833e369e1666386acbe3a7f79f",
"0x6583b7e21d1ed23158925606bc1d458d23e8324db81c815066e61b94b70c84cb",
"0x164b4039064d3ba69f3664418c3668b1a31e44d052c9d235bed5eb8b843756e5",
"0x5e7807354162efe4df1c7f0b9b077fca553444c7e2f9b2edc351722dd0245b5b",
"0x870d472bf7c2d9480b659bf2582fede9abab809a3ca9c1e619abe29f1ffb58dd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

