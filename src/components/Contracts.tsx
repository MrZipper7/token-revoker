import React, { useState, useContext } from 'react'
import { ethers } from 'ethers'
import { ModalContext } from '../context/ModalContext.js'
import type { APITokenData, Spender } from '../types.js'
import { parseTokenInfo } from '../utils/tokenInfo.js'
import { truncateEthAddress } from '../utils/truncateEthAddress.js'

const abi = [
  'function name() public view returns (string)',
  'function symbol() public view returns (string)',
  'function decimals() public view returns (uint8)',
  'function totalSupply() public view returns (uint256)',
  'function approve(address _spender, uint256 _value) public returns (bool success)',
]

interface ContractsProps {
  spenders: Spender
  token: APITokenData
  walletAddress: string
}

const Contracts = ({ spenders, token, walletAddress }: ContractsProps) => {
  const [rows, setRows] = useState([spenders])
  const [disabledRows, setDisabledRows] = useState<boolean[]>([])
  const { setShowPending } = useContext(ModalContext)

  const handleRevoke = async (spenderAddress: string, key: number) => {
    // Disable the button in the clicked on row
    let updateDisabledRows = [...disabledRows]
    updateDisabledRows[key] = true
    setDisabledRows(updateDisabledRows)

    // Handle revoke tx
    const ethereum = window.ethereum
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner(walletAddress)

    const tokenContract = new ethers.Contract(token.tokenAddress, abi, signer)

    try {
      const tx = await tokenContract.approve(spenderAddress, '0')
      setShowPending(true)
      await tx.wait()

      // Create a new array without the row at the specified key
      const updateRows = rows.filter((_, index) => index !== key)
      setRows(updateRows)
      setShowPending(false)
    } catch {
      console.log('Something went wrong.')
    }
    // Update the disabled rows (either after deletion, or tx failure)
    updateDisabledRows = [...disabledRows]
    updateDisabledRows[key] = false
    setDisabledRows(updateDisabledRows)
  }

  return (
    <>
      <div className="allowanceRowContainer">
        {rows.map((item, index) => {
          const isRowDisabled = disabledRows[index]
          return (
            <div className="allowanceRow" key={`${item.id.slice(0, 8)}-${index}`}>
              <div className="contract">
                <div className="contractName">{parseTokenInfo(item.id).name}</div>
                <a
                  className="addressUrl"
                  href={`https://subnets.avax.network/defi-kingdoms/address/${item.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contractAddress">
                    <img className="scroll" src="../scroll_bkmays.svg" alt="scroll" width="12px" />{' '}
                    {truncateEthAddress(item.id)}
                  </div>
                </a>
              </div>

              <div className="allowance">
                {/* {token.allowance === "UNLIMITED" ? "Unlimited" : token.allowance} */}
                {token.allowance === 'UNLIMITED' ? 'Unlimited' : Number(token.allowance) / 10 ** token.tokenDecimals}
              </div>

              <div className="dateApproved">{token.timestamp.slice(0, 10)}</div>

              <div className="revoke">
                <button
                  type={'submit'}
                  className={`revokeButton ${isRowDisabled ? 'disabled' : ''}`}
                  disabled={isRowDisabled}
                  onClick={() => {
                    handleRevoke(item.id, index)
                  }}
                >
                  Revoke
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Contracts
