const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");

  const nftMarketplaceawait = await NFTMarketplace.deploy();

  console.log(`deployed contract Address ${nftMarketplaceawait.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
