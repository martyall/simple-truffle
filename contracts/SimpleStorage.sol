pragma solidity ^0.4.4;

import "./Owned.sol";

contract SimpleStorage is Owned {

  uint public count;

  event CountSet(uint newCount);

  function setCount(uint _count) onlyOwner {
    count = _count;
    CountSet(_count);
  }

}

