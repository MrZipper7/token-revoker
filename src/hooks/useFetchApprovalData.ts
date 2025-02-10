import { useQuery, type QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

import type { APIReturnData } from 'types'
import { buildTokenData } from 'utils/buildTokenData'

type PaginationDirection = 'next' | 'prev' | null

async function fetchApprovalData({queryKey, meta}: QueryFunctionContext) {
  const [_key, accountAddress, token] = queryKey
  const baseUrl = `https://api.routescan.io/v2/network/mainnet/evm/53935/address/${accountAddress}/erc20-approvals`
  const url = token && meta?.direction ? `${baseUrl}?limit=100&${meta.direction}=${token}` : `${baseUrl}?limit=100`

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
  const [paginationToken, setPaginationToken] = useState<string | null>(null)
  const [direction, setDirection] = useState<PaginationDirection>(null)

  const { data, ...rest } = useQuery({
    queryKey: ['approvals', accountAddress, paginationToken],
    queryFn: async (context) => fetchApprovalData(context),
    meta: {
      direction,
    },
  })

  const fetchNextPage = () => {
    if (data?.pagination.nextToken) {
      setPaginationToken(data.pagination.nextToken)
      setDirection('next')
    }
  }

  const fetchPrevPage = () => {
    if (data?.pagination.prevToken) {
      setPaginationToken(data.pagination.prevToken)
      setDirection('prev')
    }
  }

  return {
    ...rest,
    data: data?.data ?? [],
    hasNextPage: data?.pagination.hasNextPage ?? false,
    hasPrevPage: data?.pagination.hasPrevPage ?? false,
    fetchNextPage,
    fetchPrevPage,
  }
}
