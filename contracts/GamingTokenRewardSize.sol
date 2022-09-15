// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";



contract GamingTokenRewardSize is Ownable {
     
     uint public _fristTimeGamingRewardTokenSize=5;
     uint public _genericGamingRewardTokenSize=1;


    function changeFirstGamingRewardSize(uint _size) public onlyOwner {
        _fristTimeGamingRewardTokenSize = _size;
    }

    function changeGenericGamingRewardSize(uint _size) public onlyOwner {
        _genericGamingRewardTokenSize = _size;
    }
}