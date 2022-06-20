
const hre = require("hardhat");

async function main() {

  const Sneakerfaces= await hre.ethers.getContractFactory("Sneakerfaces");
  const sneakerfaces = await Sneakerfaces.deploy();

  await sneakerfaces.deployed();

  console.log("Sneakerfaces deployed to:", sneakerfaces.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
