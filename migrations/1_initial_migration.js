var TrackParcel = artifacts.require("./TrackParcel.sol");

//TODO: async and print out contract address
module.exports = function(deployer) {
  deployer.deploy(TrackParcel);
};
