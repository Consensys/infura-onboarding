const Donations = artifacts.require("Donations");

module.exports = async function (deployer) {
    try {
        // Deploy the Donations contract
        await deployer.deploy(Donations);

        // Get the deployed instance
        const donationsInstance = await Donations.deployed();

        console.log("Donations contract deployed at:", donationsInstance.address);
    } catch (error) {
        console.error("Error deploying the contract:", error);
    }
};
