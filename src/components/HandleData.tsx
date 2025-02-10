import { useContext } from 'react'

import { ModalContext } from 'context/ModalContext'
import { useFetchApprovalData } from 'hooks/useFetchApprovalData'
import { TokenAllowance } from './TokenAllowance'
import 'App.css'

export function HandleData() {
  const { accountAddress } = useContext(ModalContext)
  const { data, isLoading, isError, hasNextPage, hasPrevPage, fetchNextPage, fetchPrevPage, refetch } =
    useFetchApprovalData(accountAddress)

  function handleRefetch() {
    refetch()
  }

  return (
    <>
      {isError ? (
        <div className="loading">
          <p>
            <strong>Something went wrong. Please refresh and try again.</strong>
          </p>
          <button type={'submit'} className="revokeButton retry" onClick={handleRefetch}>
            Retry
          </button>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="loading">
              <div className="imageContainer">
                <img
                  className="tokenLogo rotate"
                  alt=""
                  src="https://glacier-api.avax.network/proxy/chain-assets/a0a2d1a/chains/53935/contracts/0x77f2656d04E158f915bC22f07B779D94c1DC47Ff/logo.png"
                />
              </div>
              <p>Loading Token Approvals...</p>
            </div>
          ) : data.length === 0 ? (
            <div className="loading">No token approvals found.</div>
          ) : (
            <>
              <div className="pagination">
                {hasPrevPage && (
                  <button type="button" onClick={fetchPrevPage} disabled={isLoading}>
                    Previous Page
                  </button>
                )}
                {hasNextPage && (
                  <button type="button" onClick={fetchNextPage} disabled={isLoading}>
                    Next Page
                  </button>
                )}
              </div>
              {data.map((item, i) => (
                <TokenAllowance key={`${item.tokenAddress}-${i}`} tokenItem={item} />
              ))}
              <div className="pagination">
                {hasPrevPage && (
                  <button type="button" onClick={fetchPrevPage} disabled={isLoading}>
                    Previous Page
                  </button>
                )}
                {hasNextPage && (
                  <button type="button" onClick={fetchNextPage} disabled={isLoading}>
                    Next Page
                  </button>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}
