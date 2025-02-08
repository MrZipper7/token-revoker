import { parseTokenInfo } from "../utils/tokenInfo"
import { truncateEthAddress } from "../utils/truncateEthAddress"

const Token = ( {tokenItem} ) => {

  const tokenInfo = parseTokenInfo(tokenItem.token_address)

  return (
      <div className='tokenRow'>

        {/* Render Token Logo */}
          <div className='left'>
            <div className='logoContainer'>
              <img className='tokenLogo' src={tokenInfo.logo} alt='tokenlogo'/>
            </div>

        {/* Render Token Name & Balance */}
            <div className='left-info-container'>
              {/* <div className='tokenName'>{tokenItem.token_address_label}</div> */}
              <div className='tokenName'>{tokenInfo.contractAddress === "" ? tokenItem.token_address_label : tokenInfo.name}</div>
              <div className='tokenBalance'>{tokenItem.contract_decimals === 0 ? Number(tokenItem.balance) : (Number(tokenItem.balance)/(10**tokenItem.contract_decimals)).toFixed(3)} {tokenItem.ticker_symbol}</div>
            </div>
          </div>

        {/* Render token URL */}
          <div className='right'>
            <a className='addressUrl' href={'https://subnets.avax.network/defi-kingdoms/address/' + tokenItem.token_address} target='_blank' rel='noreferrer'><div className='contractAddress'><img className='scroll' src='../scroll_bkmays.svg' alt='scroll' width='12px' /> {truncateEthAddress(tokenItem.token_address)}</div></a>
          </div>
        </div>
  )
}

export default Token;
