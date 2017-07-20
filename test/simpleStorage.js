var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SimpleStorageManager = artifacts.require("./SimpleStorageManager.sol");
var filterByEventName = require("./helpers.js").filterByEventName;


contract('SimpleStorageManager', function(accounts) {
    it("should create a SimpleStorage contract", function(){
        return SimpleStorageManager.deployed().then(function(instance) {
            return instance.createSimpleStorage({from: accounts[0]});
        }).then(function(txResult){
            let owner = filterByEventName(txResult.logs, "StorageDeployed")[0].args.owner;
            assert.equal(accounts[0], owner);
        });
    });
    it("we can set the counter on simple storage.", function(){
        return SimpleStorageManager.deployed().then(function(instance) {
            return instance.createSimpleStorage({from: accounts[0]});
        }).then(function(createSSResult){
            let storageAddress = filterByEventName(createSSResult.logs, "StorageDeployed")[0].args.storageAddress;
            let storage = SimpleStorage.at(storageAddress);
            return storage.setCount(10);
        }).then(function(setCountResult) {
            let count = filterByEventName(setCountResult.logs, "CountSet")[0].args.newCount;
            assert.equal(10, count);
        });
    });
});
