export type APIReturnData = {
  items: APITokenData[]
  count: 0
  countType: 'exact' | 'lowerBound' | 'approx'
  link: {
    next: string
    nextToken: string
    prev: string
    prevToken: string
  }
}

export type APITokenData = {
  chainId: string
  timestamp: string
  blockNumber: 0
  txHash: string
  logIndex: 0
  owner: {
    id: string
    alias: string
    owner: string
    type: string
    supertype: string
    icon: string
    iconUrls: {
      '32': string
      '64': string
      '256': string
      '1024': string
    }
    checkmark: true
    isContract: true
    ensReverseLookups: [
      {
        chainId: string
        name: string
      },
    ]
  }
  spender: Spender
  allowance: string
  currentAllowance: string
  tokenAddress: string
  tokenName: string
  tokenSymbol: string
  tokenDecimals: 0
}

export type Spender = {
  id: string
  alias: string
  owner: string
  type: string
  supertype: string
  icon: string
  iconUrls: {
    '32': string
    '64': string
    '256': string
    '1024': string
  }
  checkmark: true
  isContract: true
  ensReverseLookups: [
    {
      chainId: string
      name: string
    },
  ]
}
