import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import TokenAllowance from './TokenAllowance'

const HandleData = ({ accountAddress }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const approvalsEndpoint = `https://api.routescan.io/v2/network/mainnet/evm/53935/address/${accountAddress}/erc20-approvals?limit=100`
    // const config = {
    //   headers: {
    //     "Authorization": `Bearer ${import.meta.env.REACT_APP_APIKEY}`
    //   }
    // }
    axios
      .get(approvalsEndpoint)
      .then(res => {
        console.log(res)
        setData(res.data.items)
        setLoading(false)
        setError(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const retryFetch = () => {
    setError(false)
    setLoading(true)
    fetchData()
  }

  return (
    <>
      {error ? (
        <div className="loading">
          <p>
            <strong>Something went wrong. Please refresh and try again.</strong>
          </p>
          <button className="revokeButton retry" onClick={retryFetch}>
            Retry
          </button>
        </div>
      ) : (
        <>
          {loading ? (
            <div className="loading">
              <div className="imageContainer">
                <img
                  className="tokenLogo rotate"
                  alt=""
                  src="https://glacier-api.avax.network/proxy/chain-assets/a0a2d1a/chains/53935/contracts/0x77f2656d04E158f915bC22f07B779D94c1DC47Ff/logo.png"
                ></img>
              </div>
              <p>Loading Token Approvals...</p>
            </div>
          ) : data.length === 0 ? (
            <div className="loading">No token approvals found.</div>
          ) : (
            data.map((item, i) => {
              return (
                <TokenAllowance
                  key={`${item.tokenAddress}-${i}`}
                  tokenItem={item}
                  queryWalletAddress={accountAddress}
                />
              )
            })
          )}
        </>
      )}
    </>
  )
}

export default HandleData
