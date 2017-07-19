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
});
