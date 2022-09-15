// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PauseTokenStatus is Ownable {

    bool public blockGiggleTokenStatus;
    address _manager;

    constructor(){
        _manager=msg.sender;
    }
    
    function PauseToken() public onlyOwner  returns  (bool){
        blockGiggleTokenStatus=true;
        return true;
    }

    function resumeToken() public onlyOwner   returns (bool){
        blockGiggleTokenStatus=false;
        return false;
    }

    modifier isTokenPaused(){
        require(blockGiggleTokenStatus==false,"TOKEN TRANSFER ARE BLOCKED");
        _;
    }
}