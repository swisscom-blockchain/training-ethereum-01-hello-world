//var Migrations = artifacts.require("./Migrations.sol");
var TrackParcel = artifacts.require("./TrackParcel.sol");


module.exports = function(deployer) {
  deployer.deploy(TrackParcel);
};
