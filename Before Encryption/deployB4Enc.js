// sync solidity
// async javascript
/*
Sync - promise
*/
// Promise can be : Pending, Fulfilled, Rejected

const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config(); // config() needs to be called as a function, if only .config is written it will remain undefined

async function main() {
  // http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_simpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_simpleStorage.bin",
    "utf-8"
  );

  /* pass ABI so our code knows how to interact with the contract
  Pass Binary because its the main compiled code
  Pass wallet so we have a private key we can use to sign deploying this contract
  */

  // THIS NEEDS TO BE USED FOR DEPLOYMENT AND CONNECTING TO THE CONTRACT
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet); // In ethers a Contract Factory is an object that you can use to deploy contracts
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // using a contract factory to deploy
  await contract.deployTransaction.wait(1); // You only get a transaction receipt when you wait for a block confirmation

  // Get number
  const currentFavNum = await contract.retrieve();
  //// console.log(currentFavNum.toString()); // We will interpolate this string
  console.log(`Current Favourite Number: ${currentFavNum.toString()}`); // ${variable} // Mix variables with string using backticks ``
  const transactionResponse = await contract.store("7");
  const transactionReceipt = await transactionResponse.wait(1); // Calling a function on a contract unlike using contract factory
  const updatedFavNum = await contract.retrieve();
  console.log(`Updated Favourite Number: ${updatedFavNum}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
