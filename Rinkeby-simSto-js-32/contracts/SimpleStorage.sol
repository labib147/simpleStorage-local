// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract simpleStorage {
    bool hasFav = true;
    uint256 numb = 256;
    string numberS = "Six";
    int256 negNum = -7;
    address myAddress = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    bytes32 favCat = "cat";

    uint256 fNum;
    mapping(string => uint256) public nameToFavNum;

    struct People {
        string name;
        uint256 fNum;
    }

    uint256[] public fNumList;
    People[] public peopleArr;

    function store(uint256 _fNum) public {
        fNum = _fNum;
    }

    function retrieve() public view returns (uint256) {
        return fNum;
    }

    function addPerson(string memory _name, uint256 _fNum) public {
        People memory newPerson = People(_name, _fNum);
        peopleArr.push(newPerson);

        nameToFavNum[_name] = _fNum;
    }
}
