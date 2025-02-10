import type { TokenData } from 'types'
import { Contracts } from './Contracts'
import { Token } from './Token'
import 'App.css'

interface TokenAllowanceProps {
  tokenItem: TokenData
}

export function TokenAllowance({ tokenItem }: TokenAllowanceProps) {
  return (
    <>
      <div className="tokenContainer">
        <Token tokenItem={tokenItem} />
        <div className="headers">
          <div className="header-approved-to">Approved To</div>
          <div className="header-allowance">Allowance</div>
          <div className="header-date-approved">Date Approved</div>
          <div className="header-revoke">Revoke</div>
        </div>
        <div className="allowanceRowContainer">
          {tokenItem.spenders.map((item, index) => (
            <Contracts key={`${item.spenderAddress.slice(0, 8)}-${index}`} token={tokenItem} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
