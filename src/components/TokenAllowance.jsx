import '../App.css'
import Contracts from './Contracts'
import Token from './Token'

const TokenAllowance = ({ tokenItem, queryWalletAddress }) => {
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
        <Contracts
          key={tokenItem.tokenName}
          spenders={tokenItem.spender}
          token={tokenItem}
          queryWalletAddress={queryWalletAddress}
        />
      </div>
    </>
  )
}

export default TokenAllowance
