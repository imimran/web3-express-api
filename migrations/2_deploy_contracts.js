const Contacts = artifacts.require("../contracts/MyContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Contacts);
};