import { Fragment, useContext } from 'react'

import { NFT_CONTRACTS } from 'constants/index'
import { ModalContext } from 'context/ModalContext'
import { useFetchApprovalData } from 'hooks/useFetchApprovalData'
import { Button } from './Button'
import { TokenAllowance } from './TokenAllowance'
import 'App.css'

export function HandleData() {
  const { accountAddress } = useContext(ModalContext)
  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } =
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
                  src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/jewel_token_x2.png"
                />
              </div>
              <p>Loading Token Approvals...</p>
            </div>
          ) : data?.pages.length === 0 ? (
            <div className="loading">No token approvals found.</div>
          ) : (
            <>
              {data?.pages.map((group, i) => (
                <Fragment key={i}>
                  {group.data.map(
                    (item, i) =>
                      !NFT_CONTRACTS.includes(item.tokenAddress) && (
                        <TokenAllowance key={`${item.tokenAddress}-${i}`} tokenItem={item} />
                      )
                  )}
                </Fragment>
              ))}
              <div className="pagination">
                {hasNextPage && (
                  <Button
                    text={'Load More'}
                    onClick={() => fetchNextPage()}
                    isDisabled={isLoading || isFetchingNextPage}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}
