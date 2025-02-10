import { ethers } from 'ethers'
import { useContext, useState } from 'react'

import { ERC20_ABI } from 'constants/index'
import { ModalContext } from 'context/ModalContext'

export function useRevokeApproval() {
  const { setShowPending, accountAddress } = useContext(ModalContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleRevoke = async (tokenAddress: string, spenderAddress: string) => {
    setIsLoading(true)

    // Handle revoke tx
    const ethereum = window.ethereum
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner(accountAddress)

    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer)

    try {
      const tx = await tokenContract.approve(spenderAddress, '0')
      setShowPending(true)
      await tx.wait()

      setIsLoading(false)
      setShowPending(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setShowPending(false)
    }
  }
  return { handleRevoke, isLoading }
}
