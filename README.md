# Example of Solidity

- Basic operations
- Different data structures
- Truffle Tests

Please visit the Solidity documentation: [https://solidity.readthedocs.io/en/v0.4.25/](https://solidity.readthedocs.io/en/v0.4.25/)

## Run tests

Several Tests will fail.

```bash
ganache-cli

# new terminal
truffle test

# This test class should work
truffle test test/Task0-TrackParcel-Test.js
```

## Task 0

Goal: Understand the smart contract `TrackParcel.sol` and the test file `Task0-TrackParcel-Test.js`.

```bash
truffle test test/Task0-TrackParcel-Test.js
```

## Task 1

Goal: Implement required code to make the test green.

Description: Whenever a new record is written `writeRecord(...)` an event should be emitted.

```bash
truffle test test/Task1-Event-Test.js
```

## Task 2

Goal: Implement required code to make the test green.

Description: Currently only position and temperature is recorded. New requirement is to add an additional property `humidity`. Humidity is defined between 0 and 100 percent as integer without floating numbers.
Extend the data structure and the method. The new method signature should look like this:
`function writeRecord(uint256 _parcelId, string _position, uint16 _temperature, uint8 _humidity) public returns(bool)`
In case `humidity` is out of the defined range, revert the transaction. Use `Require`. [Documentation](https://solidity.readthedocs.io/en/v0.4.25/control-structures.html?highlight=require#error-handling-assert-require-revert-and-exceptions)

```bash
truffle test test/Task2-humidity-Test.js
```

Hint: This task will modify the method signature. Make sure to check the tests that they take in account to have an additional parameter.

## Task 3

Goal: Implement required code to make the test green.

Description: When somebody adds a parcel the first time `writeRecord(...)` the sender address - `msg.sender` - is the owner of that specific parcel `_parcelId`. Only the owner is allowed to update that specific `_parcelId`

```bash
truffle test test/Task3-Ownership-Test.js
```

## Task 4

Goal: Whenever somebody wants to write a record, the sender has to pay a fee of 0.001 Ether. The fee should directly be sent to the address: `0xA38D3A2dc70a0c4e713612901AC90AE81f254Ab5`.

Tasks:

- Records are only written in the smart contract if 0.001 Ether is added or more.
- If too much Ether was sent the rest will be rewarded to the sender.
- Create a test file to test the function. Write at least three test methods (not enough Ether, Exact amount of Ether, too much Ether).

This may help:

- Mark function `writeRecord(...)` as `payable`
- `require()`
- `msg.value()`
- `msg.sender()`
- `address.send()`
- [Ether converter](https://etherconverter.online/)