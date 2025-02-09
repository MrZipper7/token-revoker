export type APIReturnData = {
  items: APITokenData[]
  count: number
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
  blockNumber: number
  txHash: string
  logIndex: number
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
  spender: APISpender
  allowance: string
  currentAllowance: string
  tokenAddress: string
  tokenName: string
  tokenSymbol: string
  tokenDecimals: number
}

export type APISpender = {
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

export type TokenData = {
  chainId: string
  tokenAddress: string
  tokenName: string
  tokenSymbol: string
  tokenDecimals: number
  spenders: Spender[]
}

export type Spender = {
  spenderAddress: string
  timestamp: string
  blockNumber: number
  txHash: string
  allowance: string
  currentAllowance: string
}