import type { APITokenData } from '../types.js'
import { parseTokenInfo } from '../utils/tokenInfo.js'
import { truncateEthAddress } from '../utils/truncateEthAddress.js'

const Token = ({ tokenItem }: { tokenItem: APITokenData }) => {
  const tokenInfo = parseTokenInfo(tokenItem.tokenAddress)

  return (
    <div className="tokenRow">
      {/* Render Token Logo */}
      <div className="left">
        <div className="logoContainer">
          <img className="tokenLogo" src={tokenInfo.logo} alt="tokenlogo" />
        </div>

        {/* Render Token Name & Balance */}
        <div className="left-info-container">
          {/* <div className='tokenName'>{tokenItem.token_address_label}</div> */}
          <div className="tokenName">{tokenInfo.contractAddress === '' ? tokenItem.tokenName : tokenInfo.name}</div>
          <div className="tokenBalance">
            {/* {tokenItem.tokenDecimals === 0
              ? Number(tokenItem.balance)
              : (Number(tokenItem.balance) / 10 ** tokenItem.tokenDecimals).toFixed(3)}{' '} */}
            {tokenItem.tokenSymbol}
          </div>
        </div>
      </div>

      {/* Render token URL */}
      <div className="right">
        <a
          className="addressUrl"
          href={`https://subnets.avax.network/defi-kingdoms/address/${tokenItem.tokenAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="contractAddress">
            <img className="scroll" src="../scroll_bkmays.svg" alt="scroll" width="12px" />{' '}
            {truncateEthAddress(tokenItem.tokenAddress)}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Token
