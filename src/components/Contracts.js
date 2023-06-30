import { ethers } from 'ethers';
import { parseTokenInfo } from '../utils/tokenInfo';
import { truncateEthAddress } from '../utils/truncateEthAddress';

const Contracts = ( { spenders, token, queryWalletAddress } ) => {

    const handleRevoke = async (spenderAddress) => {
        const ethereum = window.ethereum
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        })
        const provider = new ethers.providers.Web3Provider(ethereum)
        const walletAddress = accounts[0]
        console.log(walletAddress)
        console.log(queryWalletAddress)

        if (walletAddress !== queryWalletAddress.toLowerCase()) {
            alert(`Sorry, you cannot revoke approval for this wallet address:${queryWalletAddress} as this is not your wallet.`)
            return
        }
        const signer = provider.getSigner(walletAddress)

        const abi = [
            "function name() public view returns (string)",
            "function symbol() public view returns (string)",
            "function decimals() public view returns (uint8)",
            "function totalSupply() public view returns (uint256)",
            "function approve(address _spender, uint256 _value) public returns (bool success)"
        ]

        const tokenContract = new ethers.Contract(token.token_address, abi, signer)

        await tokenContract.approve(spenderAddress, "0")
        
        alert("Successfully revoked approval!")
    }

    return (
        <>
        <div className='allowanceRowContainer'>
        {spenders.map(item => {
            // let riskImage 
            // let riskTitle
            // // console.log(item.spender_address)

            // switch(item.risk_factor) {
            //     case 'HIGH RISK, REVOKE NOW':
            //         riskImage = 'https://res.cloudinary.com/dl4murstw/image/upload/v1683203742/warning_1_dz7rpq.png'
            //         riskTitle = 'HIGH RISK, REVOKE NOW'
            //         break;
            //     case 'CONSIDER REVOKING':
            //         riskImage = 'https://res.cloudinary.com/dl4murstw/image/upload/v1683203726/warning_ymvqdc.png'
            //         riskTitle = 'CONSIDER REVOKING'
            //         break;
            //     case 'LOW RISK':
            //         riskImage = 'https://res.cloudinary.com/dl4murstw/image/upload/v1683203505/check_zdftsz.png'
            //         riskTitle = 'LOW RISK'
            //         break;
            //     default:
            //         riskImage ='https://res.cloudinary.com/dl4murstw/image/upload/v1683203505/check_zdftsz.png'
            // }

            return (
            <div className='allowanceRow' key={item.spender_address}>

                {/* <div className='risk'>
                    <img className='riskLogo' src={riskImage} title={riskTitle} alt='tokenlogo'/>
                </div> */}

                <div className='contract'>
                    <div className='contractName'>{parseTokenInfo(item.spender_address).name}</div>
                    <a className='addressUrl' href={'https://subnets.avax.network/defi-kingdoms/address/' + item.spender_address} target='_blank' rel='noreferrer'><div className='contractAddress'><img className='scroll' src='../scroll_bkmays.svg' alt='scroll' width='12px' /> {truncateEthAddress(item.spender_address)}</div></a>
                </div>

                <div className='allowance'>
                    {/* {item.allowance === "UNLIMITED" ? "Unlimited" : item.allowance} */}
                    {item.allowance === "UNLIMITED" ? "Unlimited" : (Number(item.allowance)/(10**token.contract_decimals))}
                </div>

                {/* <div className='valueAtRisk'>
                {item.pretty_value_at_risk_quote}
                </div> */}

                <div className='dateApproved'>
                {item.block_signed_at.slice(0,10)}
                </div>

                <div className='revoke'>
                    <button className='revokeButton' onClick={() => handleRevoke(item.spender_address)}>Revoke</button>
                </div>
            </div>
            )
        })}
        </div>
        </>
    )
}

export default Contracts