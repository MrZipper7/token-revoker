import type { APITokenData, Spender, TokenData } from '../types.js'

export function buildTokenData(tokenInfo: APITokenData[]): TokenData[] {
  return tokenInfo.reduce<TokenData[]>((acc, t) => {
    const spender: Spender = {
      spenderAddress: t.spender.id,
      timestamp: t.timestamp,
      blockNumber: t.blockNumber,
      txHash: t.txHash,
      allowance: t.allowance,
      currentAllowance: t.currentAllowance,
    }
    const token: TokenData = {
      chainId: t.chainId,
      spenders: [spender],
      tokenAddress: t.tokenAddress,
      tokenName: t.tokenName,
      tokenSymbol: t.tokenSymbol,
      tokenDecimals: t.tokenDecimals,
    }
    const index = acc.findIndex(a => a.tokenAddress.toLowerCase() === t.tokenAddress.toLowerCase())
    if (index !== -1) {
      acc[index]?.spenders.push(spender)
    } else {
      acc.push(token)
    }
    return acc
  }, [])
}
