import { useContext, useEffect, useState } from 'react'

import { ModalContext } from 'context/ModalContext'
import useWalletConnect from 'hooks/useWalletConnect'
import { truncateEthAddress } from 'utils/truncateEthAddress'
import 'App.css'

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
