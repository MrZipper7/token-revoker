import React, { useState, useContext } from 'react';
import { ethers } from 'ethers';

import { ModalContext } from '../context/ModalContext';
import { parseTokenInfo } from '../utils/tokenInfo';
import { truncateEthAddress } from '../utils/truncateEthAddress';

const abi = [
  "function name() public view returns (string)",
  "function symbol() public view returns (string)",
  "function decimals() public view returns (uint8)",
  "function totalSupply() public view returns (uint256)",
  "function approve(address _spender, uint256 _value) public returns (bool success)"
]

const Contracts = ( { spenders, token, walletAddress } ) => {
  const [rows, setRows] = useState(spenders);
  const [disabledRows, setDisabledRows] = useState([]);
  const {setShowPending} = useContext(ModalContext);

  const handleRevoke = async (spenderAddress, key) => {
    // Disable the button in the clicked on row
    let updateDisabledRows = [...disabledRows];
    updateDisabledRows[key] = true;
    setDisabledRows(updateDisabledRows);

    // Handle revoke tx
    const ethereum = window.ethereum
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner(walletAddress)

    const tokenContract = new ethers.Contract(token.token_address, abi, signer)

    try {
      const tx = await tokenContract.approve(spenderAddress, "0")
      setShowPending(true)
      await tx.wait();

      // Create a new array without the row at the specified key
      const updateRows = rows.filter((_, index) => index !== key);
      setRows(updateRows);
      setShowPending(false);
    } catch {
      console.log('Something went wrong.')
    }
    // Update the disabled rows (either after deletion, or tx failure)
    updateDisabledRows = [...disabledRows];
    updateDisabledRows[key] = false;
    setDisabledRows(updateDisabledRows);
  }

  return (
      <>
        <div className='allowanceRowContainer'>
          {rows.map((item, index) => {
            const isRowDisabled = disabledRows[index];
            return (
              <div className='allowanceRow' key={index}>
                <div className='contract'>
                  <div className='contractName'>{parseTokenInfo(item.spender_address).name}</div>
                  <a className='addressUrl' href={'https://subnets.avax.network/defi-kingdoms/address/' + item.spender_address} target='_blank' rel='noreferrer'><div className='contractAddress'><img className='scroll' src='../scroll_bkmays.svg' alt='scroll' width='12px' /> {truncateEthAddress(item.spender_address)}</div></a>
                </div>

                <div className='allowance'>
                  {/* {item.allowance === "UNLIMITED" ? "Unlimited" : item.allowance} */}
                  {item.allowance === "UNLIMITED" ? "Unlimited" : (Number(item.allowance)/(10**token.contract_decimals))}
                </div>

                <div className='dateApproved'>
                  {item.block_signed_at.slice(0,10)}
                </div>

                <div className='revoke'>
                  <button
                    className={`revokeButton ${isRowDisabled ? 'disabled' : ''}`}
                    disabled={isRowDisabled}
                    onClick={() => {
                      handleRevoke(item.spender_address, index);
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