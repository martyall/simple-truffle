pragma solidity ^0.4.4;

contract Owned {
    
    address owner;
    
    modifier onlyOwner(){ if (isOwner(msg.sender)) _;}

    event TransferOwner(address from, address to);

    function Owned(){
      owner = msg.sender;
    }

    function setOwner(address newOwner) onlyOwner {
        TransferOwner(owner, newOwner);
        owner = newOwner;
    } 

    function isOwner(address person) returns(bool) {
      return person == owner;        
    }
    
}
