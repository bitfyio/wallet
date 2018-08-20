var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'bad rose dog cannon adult lizard siege tumble job puzzle only trim';
module.exports = {
  networks: {
      development: {
          host: "localhost",
          port: 7545,
          network_id: "*", // Match any network id
          gasPrice: 20000000000,
          gas: 5712388
      },
      ropsten: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/3375b1828f7f41508bd1755da4d234b0")
        },
        network_id: 3
      }
  },
  solc: {
      optimizer: {
          enabled: true,
          runs: 5000000
      }
  }
};