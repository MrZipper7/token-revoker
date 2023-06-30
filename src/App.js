import { useState, useEffect } from 'react';
import './App.css';
import HandleData from './components/HandleData'

function App() {

  const [haveMetamask, sethaveMetamask] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);

  const { ethereum } = window;
  const dfkChainId = '0xd2af';

  // Connect MM wallet & prompt to switch networks as needed
  const connectWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      if (isCorrectNetwork) {
        setIsConnected(true)
      } else {
        switchChain().then(() => {
          setIsConnected(true);
        });
      }
    } catch (error) {
      console.log('Connect Wallet Error')
      setIsConnected(false);
    }
  };

  // Switch network to DFK Chain
  const switchChain = async () => {
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
          chainId: dfkChainId,
          rpcUrls: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
          chainName: "DFK Chain",
          nativeCurrency: {
              name: "JEWEL",
              symbol: "JEWEL",
              decimals: 18
          },
          blockExplorerUrls: ["https://subnets.avax.network/defi-kingdoms/"]
      }]
    });
  }

  // Confirm that we are on the correct network
  const checkChainId = async () => {
    if (window.ethereum) {
      const currentChainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
      setIsCorrectNetwork(currentChainId === dfkChainId);
    }
  };


  // Listen for presence of wallet
  useEffect(() => {
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      } else {
      sethaveMetamask(true);
      }
    };
    checkMetamaskAvailability();
  }, [ethereum]);

  // Listen for changes to network & account
  useEffect(() => {
    const handleChainChanged = async () => {
      checkChainId()
    };
  
    const handleAccountsChanged = () => {
      setIsConnected(false)
    };
  
    if (window.ethereum) {
      window.ethereum.on('chainChanged', handleChainChanged);
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
    
  }, []);

  // Listen for changes to network (& set initial)
  useEffect(() => {
    checkChainId();
  }, [])

  
  return (
    <div className='modalWrapper'>
      <div className='outerContainer'>
        <div className='modal fancy'>
          <div className='title'>
            <div>
              <h1>Token Approval Tool</h1>
            </div>
          </div>
          <div className='tokenContainerWrapper'>
            <p>Use this tool to revoke contract approvals on DFK Chain.</p>
            {haveMetamask ? (
              <>
                {isConnected && isCorrectNetwork ? (
                  <HandleData accountAddress={accountAddress}/>
                ) : (
                  <>
                    <p>Connect your wallet to continue.</p>
                    <div className='button-wrapper'>
                      <button className="fancyButton active" onClick={connectWallet}>
                        Connect
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <p><strong>No wallet detected.<br/>Please install MetaMask or another Web3 wallet to continue.</strong></p>
                <div className='button-wrapper'>
                  <button className="fancyButton disabled" disabled={true}>
                    Connect
                  </button>
                </div>
              </>
            )}
            <p className='warning'>This tool was developed by a third party and is not affiliated with DeFi Kingdoms or Kingdom Studios. Use it at your own risk. You can verify all official contracts in the DFK Developer Documentation at: <a href='https://devs.defikingdoms.com' target='_blank' rel='noreferrer'>https://devs.defikingdoms.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
