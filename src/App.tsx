import { useCallback, useContext, useEffect, useState } from 'react'

import { HandleData } from 'components/HandleData'
import { PendingModal } from 'components/PendingModal'
import { WalletInfo } from 'components/WalletInfo'
import { ModalContext } from 'context/ModalContext'
import { useWalletConnect } from 'hooks/useWalletConnect'
import 'App.css'

export function App() {
  const [haveMetamask, sethaveMetamask] = useState(false)
  const { connectWallet } = useWalletConnect()
  const { isConnected, setIsConnected } = useContext(ModalContext)
  const { isCorrectNetwork, setIsCorrectNetwork } = useContext(ModalContext)
  const { showPending } = useContext(ModalContext)
  const dfkChainId = '0xd2af'

  const handleConnectWallet = () => {
    connectWallet()
  }

  // Confirm that we are on the correct network
  const checkChainId = useCallback(async () => {
    if (window.ethereum) {
      const currentChainId = await window.ethereum.request({
        method: 'eth_chainId',
      })
      setIsCorrectNetwork(currentChainId === dfkChainId)
    }
  }, [setIsCorrectNetwork])

  // Listen for presence of wallet
  // biome-ignore lint/correctness/useExhaustiveDependencies: Unclear if necessary
  useEffect(() => {
    const checkMetamaskAvailability = async () => {
      if (!window.ethereum) {
        sethaveMetamask(false)
      } else {
        sethaveMetamask(true)
      }
    }
    checkMetamaskAvailability()
  }, [window.ethereum])

  // Listen for changes to network & account
  useEffect(() => {
    const handleChainChanged = async () => {
      checkChainId()
    }

    const handleAccountsChanged = () => {
      setIsConnected(false)
    }

    if (window.ethereum) {
      window.ethereum.on('chainChanged', handleChainChanged)
      window.ethereum.on('accountsChanged', handleAccountsChanged)
    }
  }, [checkChainId, setIsConnected])

  // Listen for changes to network (& set initial)
  useEffect(() => {
    checkChainId()
  }, [checkChainId])

  return (
    <>
      {showPending && <PendingModal />}
      {/* <PendingModal/> */}
      <div className="modalWrapper">
        <WalletInfo />
        <div className="outerContainer">
          <div className="modal fancy">
            <div className="title">
              <div>
                <h1>Token Approval Tool</h1>
              </div>
            </div>
            <div className="tokenContainerWrapper">
              <p>Use this tool to revoke contract approvals on DFK Chain.</p>
              {haveMetamask ? (
                <>
                  {isConnected && isCorrectNetwork ? (
                    <HandleData />
                  ) : (
                    <>
                      <p>Connect your wallet to continue.</p>
                      <div className="button-wrapper">
                        <button className="fancyButton active" type={'button'} onClick={handleConnectWallet}>
                          Connect
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <p>
                    <strong>
                      No wallet detected.
                      <br />
                      Please install MetaMask or another Web3 wallet to continue.
                    </strong>
                  </p>
                  <div className="button-wrapper">
                    <button className="fancyButton disabled" type={'submit'} disabled={true}>
                      Connect
                    </button>
                  </div>
                </>
              )}
              <p className="warning">
                This tool was developed by <strong>MrZipper</strong> for the DeFi Kingdoms community and is not directly
                affiliated with DeFi Kingdoms or Kingdom Studios. Use it at your own risk. You can verify all official
                contracts in the DFK Developer Documentation at:{' '}
                <a href="https://devs.defikingdoms.com" target="_blank" rel="noreferrer">
                  https://devs.defikingdoms.com
                </a>
                .
              </p>
              <div className="social-icons">
                <a href="https://twitter.com/MrZipper7/" target="_blank" rel="noreferrer">
                  <img className="social-icon" src="../icons8-twitter.svg" alt="twitter" width="24px" />
                </a>
                <a href="https://github.com/MrZipper7/token-revoker/" target="_blank" rel="noreferrer">
                  <img className="social-icon" src="../icons8-github.svg" alt="github" width="24px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
