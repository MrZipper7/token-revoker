import cx from 'clsx'

import { MAX_ALLOWANCE } from 'constants/index'
import { useRevokeApproval } from 'hooks/useRevokeApproval'
import type { TokenData } from 'types'
import { parseTokenInfo } from 'utils/tokenInfo'
import { truncateEthAddress } from 'utils/truncateEthAddress'

interface ContractsProps {
  token: TokenData
}

const Contracts = ({ token }: ContractsProps) => {
  const { handleRevoke, isLoading } = useRevokeApproval()

  return (
    <>
      <div className="allowanceRowContainer">
        {token.spenders.map((item, index) => {
          return (
            <div className="allowanceRow" key={`${item.spenderAddress.slice(0, 8)}-${index}`}>
              <div className="contract">
                <div className="contractName">{parseTokenInfo(item.spenderAddress).name}</div>
                <a
                  className="addressUrl"
                  href={`https://subnets.avax.network/defi-kingdoms/address/${item.spenderAddress}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contractAddress">
                    <img className="scroll" src="../scroll_bkmays.svg" alt="scroll" width="12px" />{' '}
                    {truncateEthAddress(item.spenderAddress)}
                  </div>
                </a>
              </div>

              <div className="allowance">
                {item.allowance === MAX_ALLOWANCE ? 'Unlimited' : Number(item.allowance) / 10 ** token.tokenDecimals}
              </div>

              <div className="dateApproved">{item.timestamp.slice(0, 10)}</div>

              <div className="revoke">
                <button
                  type={'submit'}
                  className={cx('revokeButton', { disabled: isLoading })}
                  disabled={isLoading}
                  onClick={() => {
                    handleRevoke(token.tokenAddress, item.spenderAddress)
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
