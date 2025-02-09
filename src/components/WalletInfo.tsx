import { useState, useEffect, useContext } from 'react'
import '../App.css'
import { ModalContext } from '../context/ModalContext.js'
import useWalletConnect from '../hooks/useWalletConnect.js'
import { truncateEthAddress } from '../utils/truncateEthAddress.js'

const WalletInfo = () => {
  const { isConnected, setIsConnected, accountAddress } = useContext(ModalContext)
  const [buttonText, setButtonText] = useState('')
  const { connectWallet } = useWalletConnect()

  useEffect(() => {
    setButtonText(isConnected ? truncateEthAddress(accountAddress) : 'Connect')
  }, [isConnected, accountAddress])

  const handleMouseOver = () => {
    isConnected ? setButtonText('Disconnect') : setButtonText('Connect')
  }

  const handleMouseOut = () => {
    isConnected ? setButtonText(truncateEthAddress(accountAddress)) : setButtonText('Connect')
  }

  const handleOnClick = () => {
    isConnected ? setIsConnected(false) : connectWallet()
  }

  return (
    <div className="walletWrapper">
      <button
        type={'button'}
        className="walletInfoButton"
        onFocus={handleMouseOver}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        onClick={handleOnClick}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default WalletInfo
