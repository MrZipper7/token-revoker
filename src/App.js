import { useState, useEffect, useContext, useCallback } from 'react';

import { ModalContext } from './context/ModalContext';
import useWalletConnect from './hooks/useWalletConnect'
import HandleData from './components/HandleData'
import PendingModal from './components/PendingModal';
import WalletInfo from './components/WalletInfo';
import './App.css';


function App() {
  
  const [haveMetamask, sethaveMetamask] = useState(false);
  const { connectWallet } = useWalletConnect();
  const { accountAddress } = useContext(ModalContext);
  const { isConnected, setIsConnected } = useContext(ModalContext);
  const { isCorrectNetwork, setIsCorrectNetwork } = useContext(ModalContext);
  const { showPending } = useContext(ModalContext);

  const { ethereum } = window;
  const dfkChainId = '0xd2af';

  const handleConnectWallet = () => {
    connectWallet()
  };

  // Confirm that we are on the correct network
  const checkChainId = useCallback(async () => {
    if (window.ethereum) {
      const currentChainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
      setIsCorrectNetwork(currentChainId === dfkChainId);
    }
  }, [setIsCorrectNetwork]);


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
    
  }, [checkChainId, setIsConnected]);

  // Listen for changes to network (& set initial)
  useEffect(() => {
    checkChainId();
  }, [checkChainId])

  
  return (
    <>
    {showPending && <PendingModal/>}
    {/* <PendingModal/> */}
    <div className='modalWrapper'>
      <WalletInfo isConnected={isConnected} accountAddress={accountAddress}/>
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
                      <button className="fancyButton active" onClick={handleConnectWallet}>
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
    </>
  );
}

export default App;
