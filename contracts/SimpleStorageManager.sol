pragma solidity ^0.4.4;

import "./SimpleStorage.sol";

contract SimpleStorageManager {

  mapping(address => address) public storageTable;

  event StorageDeployed(address owner, address storageAddress);

  function createSimpleStorage() {
    SimpleStorage ss = new SimpleStorage();
    storageTable[msg.sender] = ss;
    ss.setOwner(msg.sender);
    StorageDeployed(msg.sender, address(ss));
  }
}
