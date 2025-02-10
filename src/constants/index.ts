export const MAX_ALLOWANCE = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

export const ERC20_ABI = [
  'function name() public view returns (string)',
  'function symbol() public view returns (string)',
  'function decimals() public view returns (uint8)',
  'function totalSupply() public view returns (uint256)',
  'function approve(address _spender, uint256 _value) public returns (bool success)',
]
