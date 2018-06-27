pragma solidity ^0.4.23;


contract HelloWorld  {

    string public constant staticText = "Static Text";

    string public textValue = "Hello world";
    uint256 public numberValue = 43;
    mapping(uint8 => string) messages;
    string[] public textArray;

    event NewTextValue(address indexed from, string textValue);

    constructor() public {
    }

    function() public payable {
        revert();
    }

    function getTextValue() public view returns (string) {
        return textValue;
    }

    function setTextValue(string _textValue) public returns (bool) {
        textValue = _textValue;
        emit NewTextValue(msg.sender, textValue);
        return true;
    }
}