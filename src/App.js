import React, { Component } from 'react'
import BancorNetwork from '../build/contracts/BancorNetwork.json'
import ContractIds from '../build/contracts/ContractIds.json'
import BancorConverter from '../build/contracts/BancorConverter.json'
import SmartToken from '../build/contracts/SmartToken.json'
import BancorFormula from '../build/contracts/BancorFormula.json'
import BancorGasPriceLimit from '../build/contracts/BancorGasPriceLimit.json'
import ContractRegistry from '../build/contracts/ContractRegistry.json'
import ContractFeatures from '../build/contracts/ContractFeatures.json'
import TestTRC20Token from '../build/contracts/TestTRC20Token.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const _BancorNetwork = contract(BancorNetwork)
    const _ContractIds = contract(ContractIds)
    const _BancorConverter = contract(BancorConverter)
    const _SmartToken = contract(SmartToken)
    const _BancorFormula = contract(BancorFormula)
    const _BancorGasPriceLimit = contract(BancorGasPriceLimit)
    const _ContractRegistry = contract(ContractRegistry)
    const _ContractFeatures = contract(ContractFeatures)
    const _TestTRC20Token = contract(TestTRC20Token)

    _BancorNetwork.setProvider(this.state.web3.currentProvider)
    _ContractIds.setProvider(this.state.web3.currentProvider)
    _BancorConverter.setProvider(this.state.web3.currentProvider)
    _SmartToken.setProvider(this.state.web3.currentProvider)
    _BancorFormula.setProvider(this.state.web3.currentProvider)
    _BancorGasPriceLimit.setProvider(this.state.web3.currentProvider)
    _ContractRegistry.setProvider(this.state.web3.currentProvider)
    _ContractFeatures.setProvider(this.state.web3.currentProvider)
    _TestTRC20Token.setProvider(this.state.web3.currentProvider)


    // // Declaring this for later so we can chain functions on SimpleStorage.
    _BancorNetwork.deployed().then(function(instance) {
      var deployed = instance;
      console.log('instance',instance)
      return instance;
    }).then(function(result) {
      console.log('result',result)
    });
    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {  
      console.log(error, accounts);
    })
    .catch(err => {
      console.log('err',err);
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Good to Go!</h1>
              <p>Your Truffle Box is installed and ready.</p>
              <h2>Smart Contract Example</h2>
              <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
              <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
