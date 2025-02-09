import type { TokenData } from 'types'
import Contracts from './Contracts'
import Token from './Token'
import 'App.css'

interface TokenAllowanceProps {
  tokenItem: TokenData
  queryWalletAddress: string
}

const TokenAllowance = ({ tokenItem, queryWalletAddress }: TokenAllowanceProps) => {
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
        <Contracts spenders={tokenItem.spenders} token={tokenItem} walletAddress={queryWalletAddress} />
      </div>
    </>
  )
}

export default TokenAllowance
