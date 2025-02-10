import { type QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

import type { APIReturnData } from 'types'
import { buildTokenData } from 'utils/buildTokenData'

async function fetchApprovalData({ queryKey, pageParam }: QueryFunctionContext) {
  const [_key, accountAddress] = queryKey
  const baseUrl = `https://api.routescan.io/v2/network/mainnet/evm/53935/address/${accountAddress}/erc20-approvals?status=active&limit=100`
  const url = pageParam ? `${baseUrl}&next=${pageParam}` : `${baseUrl}`

  const response = await axios.get<APIReturnData>(url)
  return {
    data: buildTokenData(response.data.items),
    pagination: {
      nextToken: response.data.link.nextToken || null,
      prevToken: response.data.link.prevToken || null,
      hasNextPage: !!response.data.link.next,
      hasPrevPage: !!response.data.link.prev,
    },
  }
}

export function useFetchApprovalData(accountAddress: string) {
  return useInfiniteQuery({
    queryKey: ['approvals', accountAddress],
    queryFn: fetchApprovalData,
    initialPageParam: undefined,
    getNextPageParam: lastPage => lastPage.pagination.nextToken,
  })
}
