import type { TokenData } from '../types.js'
import { parseTokenInfo } from '../utils/tokenInfo.js'
import { truncateEthAddress } from '../utils/truncateEthAddress.js'

const Token = ({ tokenItem }: { tokenItem: TokenData }) => {
  const tokenInfo = parseTokenInfo(tokenItem.tokenAddress)

  return (
    <div className="tokenRow">
      {/* Render Token Logo */}
      <div className="left">
        <div className="logoContainer">
          <img className="tokenLogo" src={tokenInfo.logo} alt="tokenlogo" />
        </div>

        {/* Render Token Name & Symvol */}
        <div className="left-info-container">
          <div className="tokenName">{tokenInfo.contractAddress === '' ? tokenItem.tokenName : tokenInfo.name}</div>
          <div className="tokenBalance">{tokenItem.tokenSymbol}</div>
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
