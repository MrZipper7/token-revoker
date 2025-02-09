import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import axios from 'axios'
import type { APIReturnData } from '../types.ts'
import { buildTokenData } from '../utils/buildTokenData.js'

type PaginationDirection = 'next' | 'prev' | null

async function fetchApprovalData(accountAddress: string, direction: PaginationDirection, token?: string) {
  const baseUrl = `https://api.routescan.io/v2/network/mainnet/evm/53935/address/${accountAddress}/erc20-approvals`
  const url = token && direction ? `${baseUrl}?limit=100&${direction}=${token}` : `${baseUrl}?limit=100`

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
    queryKey: ['approvals', accountAddress, direction, paginationToken],
    queryFn: () => fetchApprovalData(accountAddress, direction, paginationToken || undefined),
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
