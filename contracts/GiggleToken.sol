// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

import "./PauseTokenStatus.sol";
import "./GamingTokenRewardSize.sol";



error OwnerNotAllowed(address _address, string _message);
error PlayerNotRegister(address _address, string _message);
error RewardPointSizeExceed(address _address, uint _rewardSize ,string _message);

contract GiggleToken is Ownable,PauseTokenStatus,GamingTokenRewardSize, ERC20   {
    event Log(uint _uint);
    event PlayerRegister(address _address, string _message);
    event playerClameReward(address _address, uint _rewardSize, string _message);
    event RewardSizeTamper(address _address, uint _rewardSize);

    address _managerAddress;

    struct Ledger {
        uint _id;
        address _from;
        address _to;
        uint _amount;
    }
    Ledger[] public _ledgers;
    mapping(address=>Ledger[]) public _personalLedger;

    struct RegisterPlayers {
        address _address;
        uint _totalPoints;
        uint _numberOfTimePlayerEnterTheGame;
        bool _isPlayerEnterGame;
    }
    mapping(address=>RegisterPlayers) _registerPlayers;

    uint rewardPointSize = 8;

    constructor() ERC20("GIGGLE _TOKEN","GGL_TK"){
        _managerAddress = msg.sender;
        _mint(_managerAddress,1000 * 10 ** decimals());
    }

    function playerEnterGamingZone() public returns (bool){
        if(msg.sender == _managerAddress){
            revert OwnerNotAllowed(msg.sender,"Owner Are Not Allowed");
        }
        _registerPlayers[msg.sender]._numberOfTimePlayerEnterTheGame++; 
        _registerPlayers[msg.sender]._address = msg.sender;
        _registerPlayers[msg.sender]._isPlayerEnterGame=true;
        _registerPlayers[msg.sender]._totalPoints=0;
        emit PlayerRegister(msg.sender,"Player Register");
        return true;
    }

    function playerClameRewards(uint gamingLevelCompleted) isTokenPaused public {
        if(gamingLevelCompleted > rewardPointSize){
            emit RewardSizeTamper(msg.sender,gamingLevelCompleted);
            revert RewardPointSizeExceed(msg.sender,gamingLevelCompleted,"RewardSize Modified");
        }


        RegisterPlayers storage  registerPlayer = _registerPlayers[msg.sender];
        uint  _gamingRewardCoins;
        if(registerPlayer._numberOfTimePlayerEnterTheGame == 0){
             revert PlayerNotRegister(msg.sender,"Player Not Register");
        }
        if(registerPlayer._numberOfTimePlayerEnterTheGame == 1){
            _gamingRewardCoins = _fristTimeGamingRewardTokenSize * gamingLevelCompleted;
        }else{
            _gamingRewardCoins = _genericGamingRewardTokenSize * gamingLevelCompleted;
        }
        registerPlayer._numberOfTimePlayerEnterTheGame++;
        _registerPlayers[msg.sender]._totalPoints= _registerPlayers[msg.sender]._totalPoints + _gamingRewardCoins ;
        _approve(_manager, msg.sender, _gamingRewardCoins);
        transferFrom(_managerAddress,msg.sender, _gamingRewardCoins);
        emit playerClameReward(msg.sender,_gamingRewardCoins,"Successfullly Clamed");
    }

    
    function minitToken(uint _tokenSize) public onlyOwner isTokenPaused {
        _mint(_managerAddress,_tokenSize);
    }

    function  addLedger(address _from, address _to, uint _price) internal {
        _ledgers.push(Ledger(_ledgers.length,_from,_to,_price));
        _personalLedger[msg.sender].push(Ledger(_ledgers.length,msg.sender,_to,_price));
    }

    function getPersonalLedgers() public view returns(Ledger[] memory) {
        return _personalLedger[msg.sender];
    }
    
    function transferFrom(address from,address to,uint256 amount) isTokenPaused public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        addLedger(from,to,amount);
        return true;
    }

    function transfer(address to, uint256 amount) isTokenPaused public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }
}