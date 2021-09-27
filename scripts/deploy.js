// npx hardhat node
// npx hardhat run scripts/deploy.js --network localhost
// npx hardhat run scripts/deploy.js --network rinkeby
// WavePortal address:  0x1AdBCba2D5A83AEac283d467D6A8F138D0ceEE21

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.001'),
  });

  await waveContract.deployed();

  console.log('WavePortal address: ', waveContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();