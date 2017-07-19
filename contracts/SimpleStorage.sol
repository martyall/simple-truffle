pragma solidity ^0.4.4;

contract SimpleStorage {

  uint public count;

  event CountSet(uint newCount);

  function setCount(uint _count) {
    count = _count;
    CountSet(_count);
  }

}

