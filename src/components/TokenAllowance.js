import '../App.css'
import Token from './Token'
import Contracts from './Contracts'

const TokenAllowance = ( {tokenItem, queryWalletAddress} ) => {
    return (
        <>
            <div className='tokenContainer'>
                <Token tokenItem={tokenItem}/>
                    <div className='headers'>
                        <div className='header-approved-to'>Approved To</div>
                        <div className='header-allowance'>Allowance</div>
                        <div className='header-date-approved'>Date Approved</div>
                        <div className='header-revoke'>Revoke</div>
                    </div>
                <Contracts 
                    key={tokenItem.token_address_label}
                    spenders={tokenItem.spenders} 
                    token={tokenItem} 
                    queryWalletAddress={queryWalletAddress}
                />
            </div>
        </>
    )
}

export default TokenAllowance 