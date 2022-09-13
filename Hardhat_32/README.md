```
npm init
yarn add solc

yarn add dotenv
npm install dotenv --save // for npm
node deploy.js
```

// chainId : 1337 might work rather than whats given on Ganache

// yarn add solc@0.8.7-fixed // NO NEED

// write this in the package.json

"scripts": {
"compile": "yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol"
//if its inside the "contracts" folder "compile": "yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . contracts/SimpleStorage.sol"
},

/\_
--bin : since we want the binary
--abi : since we want the ABI
--include-path node_modules : since we want to include the contracts of files in the node modules
--base-path . : means the base path is going to be the current folder i.e. Hardhat_32

-   o . : means we will output the compiles binary & ABI to this folder i.e. Hardhat_32
    SimpleStorage.sol : since this is the contract we want to compile

    \*/
