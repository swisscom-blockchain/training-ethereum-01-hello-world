pragma solidity ^0.4.24;

contract TrackParcel {

    struct Record {
        string position;
        uint16 temperature;
    }

    mapping(uint256 => Record[]) public records;

    constructor() public {

    }

    function readRecord(uint256 _parcelId, uint256 _recordNumber) public view 
            returns(string position, uint16 temperature) {
        
        position = records[_parcelId][_recordNumber].position;
        temperature = records[_parcelId][_recordNumber].temperature;
    }

    function readRecordSize(uint256 _parcelId) public view returns (uint256) {

        return records[_parcelId].length;
    }

    function writeRecord(uint256 _parcelId, string _position, uint16 _temperature) public returns(bool) {

        records[_parcelId].push(
            Record({
                position: _position,
                temperature: _temperature     
            }));

        return true;
    }

}