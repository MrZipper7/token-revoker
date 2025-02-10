import { useContext } from 'react'

import { ModalContext } from 'context/ModalContext'

export function useWalletConnect() {
  const { ethereum } = window
  const dfkChainId = '0xd2af'
  const { setIsConnected, setAccountAddress, isCorrectNetwork } = useContext(ModalContext)

  const connectWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccountAddress(accounts[0])
      if (isCorrectNetwork) {
        setIsConnected(true)
      } else {
        switchChain().then(() => {
          setIsConnected(true)
        })
      }
    } catch (error) {
      console.log('Connect Wallet Error')
      setIsConnected(false)
    }
  }

  // Switch network to DFK Chain
  const switchChain = async () => {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: dfkChainId,
          rpcUrls: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
          chainName: 'DFK Chain',
          nativeCurrency: {
            name: 'JEWEL',
            symbol: 'JEWEL',
            decimals: 18,
          },
          blockExplorerUrls: ['https://subnets.avax.network/defi-kingdoms/'],
        },
      ],
    })
  }

  return {
    connectWallet,
    switchChain,
  }
}
