var Owned = artifacts.require("./Owned.sol");
var SimpleStorageManager = artifacts.require("./SimpleStorageManager.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Owned);
  deployer.deploy(SimpleStorage);
  deployer.deploy(SimpleStorageManager);
};
