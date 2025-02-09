const defaultLogo = '../icons8-question-mark-78.png'

const parseTokenInfo = (address: string) => {
  const token = tokenInfo.find(item => item.contractAddress.toLowerCase() === address.toLowerCase())
  return token
    ? token
    : {
        contractAddress: '',
        name: 'Unknown Contract',
        logo: defaultLogo,
      }
}

const tokenInfo = [
  // Contracts
  {
    contractAddress: '0xEb9B61B145D6489Be575D3603F4a704810e143dF',
    name: 'Hero Core',
    logo: '',
  },
  {
    contractAddress: '0x1990F87d6BC9D9385917E3EDa0A7674411C3Cd7F',
    name: 'Pet Core',
    logo: '',
  },
  {
    contractAddress: '0x50142D9e3FA508C424B3ef37BD195b4086CC3DCA',
    name: 'Pet Exchange',
    logo: '',
  },
  {
    contractAddress: '0xE959cbddB8616BDFFa5464279664CCbb9EA10317',
    name: 'Pasture',
    logo: '',
  },
  {
    contractAddress: '0x3C351E1afdd1b1BC44e931E12D4E05D6125eaeCa',
    name: 'UniswapV2 Router',
    logo: '',
  },
  {
    contractAddress: '0x57Dec9cC7f492d6583c773e2E7ad66dcDc6940Fb',
    name: 'Master Gardener',
    logo: '',
  },
  {
    contractAddress: '0xB04e8D6aED037904B77A9F0b08002592925833b7',
    name: 'LP Staking',
    logo: '',
  },
  {
    contractAddress: '0x530fff22987E137e7C8D2aDcC4c15eb45b4FA752',
    name: 'QuestCore V3',
    logo: '',
  },
  {
    contractAddress: '0x75224b0f245Fe51d5bf47A898DbB6720D4150BA7',
    name: 'Token Bridge (Synapse)',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/3e1b653/chains/53935/contracts/0xE05c976d3f045D0E6E7A6f61083d98A15603cF6A/logo.png',
  },
  {
    contractAddress: '0x501CdC4ef10b63219704Bf6aDb785dfccb06deE2',
    name: 'Item Bridge (LayerZero)',
    logo: '',
  },
  {
    contractAddress: '0x409E6CDE3119584074E162dcCC6C86433251C36f',
    name: 'Item Bridge V2 (LayerZero)',
    logo: '',
  },
  {
    contractAddress: '0x6a00Dc976a7291a1E9F5380FE6F96fE006dCdD3c',
    name: "Gaia's Tear Bridge (Deprecated)",
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/3e1b653/chains/53935/contracts/0xE05c976d3f045D0E6E7A6f61083d98A15603cF6A/logo.png',
  },
  {
    contractAddress: '0xBF956B8B9cBE8af30CE923dF24C339ecA7589a61',
    name: 'Tear Migrator',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png',
  },
  {
    contractAddress: '0xABABB0A2c42274D0e81417B824CABca464F5c16C',
    name: 'Charity Fund',
    logo: '',
  },
  {
    contractAddress: '0xD507b6b299d9FC835a0Df92f718920D13fA49B47',
    name: 'Meditation Circle',
    logo: '',
  },
  {
    contractAddress: '0xBc36D18662Bb97F9e74B1EAA1B752aA7A44595A7',
    name: 'Hero Summoning',
    logo: '',
  },
  {
    contractAddress: '0xc390fAA4C7f66E4D62E59C231D5beD32Ff77BEf0',
    name: 'Hero Auction',
    logo: '',
  },
  {
    contractAddress: '0x8101CfFBec8E045c3FAdC3877a1D30f97d301209',
    name: 'Assisting Auction',
    logo: '',
  },
  {
    contractAddress: '0x49744F76caA3B63CccE9CE7de5C8282C92c891e5',
    name: 'Pet Auction',
    logo: '',
  },
  {
    contractAddress: '0x70908Fd7278aab183C7EfC4f3449184E98e2e305',
    name: 'Dark Summoning',
    logo: '',
  },
  {
    contractAddress: '0x0f85fdf6c561C42d6b46d0E27ea6Aa9Bf9476B3f',
    name: 'Item Vendor',
    logo: '',
  },
  {
    contractAddress: '0x2542e1Ce063FED3b5Aa81936c5a8f6Eeccaa6B4A',
    name: 'Alchemist',
    logo: '',
  },
  {
    contractAddress: '0xc32A0e963e50AAAED273A75425fC39902b0d0b3b',
    name: 'Stone Carver',
    logo: '',
  },
  {
    contractAddress: '0xc9A9F352Aa188f422A8f8902B547FB3E59D37210',
    name: 'Item Consumer',
    logo: '',
  },
  {
    contractAddress: '0x6755dEBef85929aC4cd541c81147Bc17C4F0CD0e',
    name: 'Potion Migrator',
    logo: '',
  },
  {
    contractAddress: '0x564D03ccF4A9634D97100Ec18d7770A3C4E45541',
    name: 'Pet Hatching',
    logo: '',
  },
  {
    contractAddress: '0xd8D7CE8921490b75EC489bd076AD0f27DC765675',
    name: 'Raffle Master',
    logo: '',
  },
  {
    contractAddress: '0x2DC1b89d20878aD9dc06e7e165f340d6CCa78475',
    name: 'Gold Pot',
    logo: '',
  },
  {
    contractAddress: '0xf724FE22b45D519D149477aA2eC5348Cee08Cae3',
    name: 'DFK Duel S1',
    logo: '',
  },
  {
    contractAddress: '0x9EEaBBcf42F0c4900d302544Cce599811C2De2b9',
    name: 'DFK Duel S2',
    logo: '',
  },
  {
    contractAddress: '0x26E47585e93f354864Ad2644fcAc348e3db5a7F3',
    name: 'DFK Duel S3',
    logo: '',
  },
  {
    contractAddress: '0xb7fe0195808E620A71672bcCa853cD848f906621',
    name: 'DFK Duel S4',
    logo: '',
  },
  {
    contractAddress: '0x8990EAc13974522e5DAb87241a5002A61b2883d1',
    name: 'DFK Duel S5',
    logo: '',
  },
  {
    contractAddress: '0xeD1194F75180bb623231D2489071fE9c3e1e04e0',
    name: 'Token Raffle (Offerings)',
    logo: '',
  },
  {
    contractAddress: '0xcBeC62FdDD92d97E3493407501b89d6491E17429',
    name: 'Barkeep Kessing (Discord)',
    logo: '',
  },
  {
    contractAddress: '0x902F2b740bC158e16170d57528405d7f2a793Ca2',
    name: 'Bazaar',
    logo: '',
  },
  {
    contractAddress: '0x33606BE9839E180Bc7f671de008CB3669dD61A42',
    name: 'Locked CRYSTAL Transfer',
    logo: '',
  },
  {
    contractAddress: '0xEaC69796Cff468ED1694A6FfAc4cbC23bbe33aFa',
    name: 'Void Hunts',
    logo: '',
  },
  {
    contractAddress: '0xb7F679d69FA55b762F7f48432Da77D096d749540',
    name: 'DFK Duel S6',
    logo: '',
  },
  {
    contractAddress: '0x4297531f246C5DaF65726F44889B960FaEf81ECE',
    name: 'DFK Duel S999',
    logo: '',
  },

  // Major Tokens & Currencies
  {
    contractAddress: '0x04b9dA42306B023f3572e106B11D82aAd9D32EBb',
    name: 'CRYSTAL',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/cb14a1f/chains/53935/contracts/0x04b9dA42306B023f3572e106B11D82aAd9D32EBb/logo.png',
  },
  {
    contractAddress: '0x3AD9DFE640E1A9Cc1D9B0948620820D975c3803a',
    name: 'USD Coin (USDC)',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/cb14a1f/chains/53935/contracts/0x3AD9DFE640E1A9Cc1D9B0948620820D975c3803a/logo.png',
  },
  {
    contractAddress: '0x77f2656d04E158f915bC22f07B779D94c1DC47Ff',
    name: 'xJEWEL',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/a0a2d1a/chains/53935/contracts/0x77f2656d04E158f915bC22f07B779D94c1DC47Ff/logo.png',
  },
  {
    contractAddress: '0xccb93dabd71c8dad03fc4ce5559dc3d89f67a260',
    name: 'Wrapped JEWEL (wJEWEL)',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/a0a2d1a/chains/53935/contracts/0x77f2656d04E158f915bC22f07B779D94c1DC47Ff/logo.png',
  },
  {
    contractAddress: '0x6E7185872BCDf3F7a6cBbE81356e50DAFFB002d2',
    name: 'xCRYSTAL',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/cb14a1f/chains/53935/contracts/0x04b9dA42306B023f3572e106B11D82aAd9D32EBb/logo.png',
  },
  {
    contractAddress: '0xB57B60DeBDB0b8172bb6316a9164bd3C695F133a',
    name: 'Avalanche (AVAX)',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/3e1b653/chains/53935/contracts/0xB57B60DeBDB0b8172bb6316a9164bd3C695F133a/logo.png',
  },
  {
    contractAddress: '0xfBDF0E31808d0aa7b9509AA6aBC9754E48C58852',
    name: 'Ethereum (ETH)',
    logo: 'https://images.ctfassets.net/gcj8jwzm6086/65a97cd3-67e3-424a-b278-0744bd6f2dd6/9e925614abed5080ecc2e177e4c35229/43114-0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15.png',
  },
  {
    contractAddress: '0x97855Ba65aa7ed2F65Ed832a776537268158B78a',
    name: 'Klaytn (KLAY)',
    logo: 'https://klaytn.foundation/wp-content/themes/klaytn/download/klaytn-symbol.svg',
  },
  {
    contractAddress: '0x7516eb8b8edfa420f540a162335eacf3ea05a247',
    name: 'Bitcoin (BTC.b)',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/f9c6549/chains/43114/contracts/0x152b9d0FdC40C096757F570A51E494bd4b943E50/logo.png',
  },
  {
    contractAddress: '0xD17a41Cd199edF1093A9Be4404EaDe52Ec19698e',
    name: 'Matic (MATIC)',
    logo: 'https://polygonscan.com/images/svg/brands/matic.svg',
  },
  {
    contractAddress: '0x2Df041186C844F8a2e2b63F16145Bc6Ff7d23E25',
    name: 'Fantom (FTM)',
    logo: 'https://s3.coinmarketcap.com/static/img/portraits/62d51d9af192d82df8ff3a83.png',
  },
  {
    contractAddress: '0x11C3b7bADC5359242c34C68C1F0f071bFf49a3D8',
    name: 'Honk (HONK)',
    logo: 'https://glacier-api.avax.network/proxy/chain-assets/b9c4e18/chains/53935/contracts/0x11C3b7bADC5359242c34C68C1F0f071bFf49a3D8/logo.png',
  },

  // LP Tokens
  {
    contractAddress: '0x6AC38A4C112F125eac0eBDbaDBed0BC8F4575d0d',
    name: 'JEWEL-xJEWEL LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x9f378F48d0c1328fd0C80d7Ae544C6CadB5Ba99E',
    name: 'CRYSTAL-AVAX LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x48658E69D741024b4686C8f7b236D3F1D291f386',
    name: 'JEWEL-CRYSTAL LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x04Dec678825b8DfD2D0d9bD83B538bE3fbDA2926',
    name: 'CRYSTAL-USDC LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x7d4daa9eB74264b082A92F3f559ff167224484aC',
    name: 'ETH-USDC LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0xCF329b34049033dE26e4449aeBCb41f1992724D3',
    name: 'JEWEL-USDC LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x78C893E262e2681Dbd6B6eBA6CCA2AaD45de19AD',
    name: 'CRYSTAL-ETH LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x00BD81c9bAc29a3b6aea7ABc92d2C9a3366Bb4dD',
    name: 'CRYSTAL-BTC.b LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0xaFC1fBc3F3fB517EB54Bb2472051A6f0b2105320',
    name: 'CRYSTAL-KLAY LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x561091E2385C90d41b4c0dAef651A4b33E1a5CfE',
    name: 'JEWEL-KLAY LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0xF3EabeD6Bd905e0FcD68FC3dBCd6e3A4aEE55E98',
    name: 'JEWEL-AVAX LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0xfAa8507e822397bd56eFD4480Fb12ADC41ff940B',
    name: 'JEWEL-BTC.b LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x79724B6996502afc773feB3Ff8Bb3C23ADf2854B',
    name: 'JEWEL-ETH LP Token',
    logo: defaultLogo,
  },
  {
    contractAddress: '0x59D642B471dd54207Cb1CDe2e7507b0Ce1b1a6a5',
    name: 'BTC.b-USDC LP Token',
    logo: defaultLogo,
  },

  // Game Items
  {
    contractAddress: '0x576C260513204392F0eC0bc865450872025CB1cA',
    name: 'Gold',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/gold-pile.png',
  },
  {
    contractAddress: '0x58E63A9bbb2047cd9Ba7E6bB4490C238d271c278',
    name: "Gaia's Tears (Deprecated)",
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png',
  },
  {
    contractAddress: '0x79fE1fCF16Cc0F7E28b4d7B97387452E3084b6dA',
    name: "Gaia's Tears",
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png',
  },
  {
    contractAddress: '0x75E8D8676d774C9429FbB148b30E304b5542aC3d',
    name: 'Shvās Rune',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/shvas-rune.gif',
  },
  {
    contractAddress: '0xCd2192521BD8e33559b0CA24f3260fE6A26C28e4',
    name: 'Moksha Rune',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/moksha-rune.gif',
  },
  {
    contractAddress: '0xB78d5580d6D897DE60E1A942A5C1dc07Bc716943',
    name: 'Ambertaffy',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/ambertaffy.png',
  },
  {
    contractAddress: '0xA2cef1763e59198025259d76Ce8F9E60d27B17B5',
    name: 'Milkweed',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/milkweed.png',
  },
  {
    contractAddress: '0x848Ac8ddC199221Be3dD4e4124c462B806B6C4Fd',
    name: 'Darkweed',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/darkweed.png',
  },
  {
    contractAddress: '0x0096ffda7A8f8E00e9F8Bbd1cF082c14FA9d642e',
    name: 'Goldvein',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/goldvein.png',
  },
  {
    contractAddress: '0x3E022D84D397F18743a90155934aBAC421D5FA4C',
    name: 'Spiderfruit',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/spider-fruit.png',
  },
  {
    contractAddress: '0x137995beEEec688296B0118131C1052546475fF3',
    name: 'Ragweed',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/ragweed.png',
  },
  {
    contractAddress: '0x473A41e71618dD0709Ba56518256793371427d79',
    name: 'Redleaf',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/redleaf.png',
  },
  {
    contractAddress: '0x60170664b52c035Fcb32CF5c9694b22b47882e5F',
    name: 'Rockroot',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/rockroot.png',
  },
  {
    contractAddress: '0x0776b936344DE7bd58A4738306a6c76835ce5D3F',
    name: 'Bluestem',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/bluestem.png',
  },
  {
    contractAddress: '0x97b25DE9F61BBBA2aD51F1b706D4D7C04257f33A',
    name: 'Swift-Thistle',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swift-thistle.png',
  },
  {
    contractAddress: '0xe7a1B580942148451E47b92e95aEB8d31B0acA37',
    name: 'Frost Drum',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/frost-drum.png',
  },
  {
    contractAddress: '0xBcdD90034eB73e7Aec2598ea9082d381a285f63b',
    name: 'Knaproot',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/knaproot.png',
  },
  {
    contractAddress: '0x80A42Dc2909C0873294c5E359e8DF49cf21c74E4',
    name: 'Shaggy Caps',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/shaggyCaps.png',
  },
  {
    contractAddress: '0xc6030Afa09EDec1fd8e63a1dE10fC00E0146DaF3',
    name: 'Skunk Shade',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/skunkShade.png',
  },
  {
    contractAddress: '0x268CC8248FFB72Cd5F3e73A9a20Fa2FF40EfbA61',
    name: 'Bloater',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/bloater.png',
  },
  {
    contractAddress: '0x04B43D632F34ba4D4D72B0Dc2DC4B30402e5Cf88',
    name: 'Ironscale',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/ironscale.png',
  },
  {
    contractAddress: '0xc2Ff93228441Ff4DD904c60Ecbc1CfA2886C76eB',
    name: 'Lanterneye',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/lanterneye.png',
  },
  {
    contractAddress: '0x68eE50dD7F1573423EE0Ed9c66Fc1A696f937e81',
    name: 'Redgill',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/redgill.png',
  },
  {
    contractAddress: '0x7f46E45f6e0361e7B9304f338404DA85CB94E33D',
    name: 'Sailfish',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/sailfish.png',
  },
  {
    contractAddress: '0xd44ee492889C078934662cfeEc790883DCe245f3',
    name: 'Shimmerskin',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/shimmerskin.png',
  },
  {
    contractAddress: '0xA7CFd21223151700FB82684Cd9c693596267375D',
    name: 'Silverfin',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/silverfin.png',
  },
  {
    contractAddress: '0x3bcb9A3DaB194C6D8D44B424AF383E7Db51C82BD',
    name: 'Frost Bloater',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/frost-bloater.png',
  },
  {
    contractAddress: '0xE7CB27ad646C49dC1671Cb9207176D864922C431',
    name: 'Speckle Tail',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/speckle-tail.png',
  },
  {
    contractAddress: '0x60A3810a3963f23Fa70591435bbe93BF8786E202',
    name: 'King Pincer',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/king-pincer.png',
  },
  {
    contractAddress: '0x6513757978E89e822772c16B60AE033781A29A4F',
    name: 'Three-Eyed Eel',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/threeEyedEel.png',
  },
  {
    contractAddress: '0xa61Bac689AD6867a605633520D70C49e1dCce853',
    name: 'Blue Pet Egg',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-egg-blue.png',
  },
  {
    contractAddress: '0x8D2bC53106063A37bb3DDFCa8CfC1D262a9BDCeB',
    name: 'Green Pet Egg',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-egg-green.png',
  },
  {
    contractAddress: '0x7E121418cC5080C96d967cf6A033B0E541935097',
    name: 'Grey Pet Egg',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-egg-grey.png',
  },
  {
    contractAddress: '0x72F860bF73ffa3FC42B97BbcF43Ae80280CFcdc3',
    name: 'Yellow Pet Egg',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-egg-yellow.png',
  },
  {
    contractAddress: '0xf2D479DaEdE7F9e270a90615F8b1C52F3C487bC7',
    name: 'Golden Pet Egg',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-egg-golden.gif',
  },
  {
    contractAddress: '0x242078edFDca25ef2A497C8D9f256Fd641472E5F',
    name: 'Stamina Vial',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/stamina-potion.png',
  },
  {
    contractAddress: '0x84246Ce3988742D46fC00d9b8b2AFb5CDBDaE660',
    name: 'Swiftness Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-swiftness-potion.png',
  },
  {
    contractAddress: '0x591853e01EcFDcF1Bdc9f093423C197BfBBd1A4f',
    name: 'Health Vial Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-health-vial.png',
  },
  {
    contractAddress: '0x5948dd8Df6afEFE05B033AD8f3ae513a9Cd4F1Dc',
    name: 'Full Health Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-full-health.png',
  },
  {
    contractAddress: '0x449eB718e351a86718A090A1a8Db3FD561306d9b',
    name: 'Anti-Poison Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-anti-poison.png',
  },
  {
    contractAddress: '0x2dfFf745d2c7ddCAD4E97b80DF33705B1a95A172',
    name: 'Toughness Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-toughness-potion.png',
  },
  {
    contractAddress: '0x240da5314B05E84392e868aC8f2b80ad6becadd4',
    name: 'Mana Vial Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-mana-vial.png',
  },
  {
    contractAddress: '0xf17FD21bDF6713a1Dfed668b97835b21e32651e8',
    name: 'Full Mana Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-full-mana.png',
  },
  {
    contractAddress: '0xFADCb72aAE2713975a890b59FF47231D1A552De3',
    name: 'Magic Resistance Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-magic-resistance-potion.png',
  },
  {
    contractAddress: '0x5986045e7c221c8AD40A736B6434D82E29687aeB',
    name: 'Anti-Blinding Potion Crate',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/crate-anti-blindness-potion.png',
  },
  {
    contractAddress: '0x1Ae5c72601AAF4C67C6a6004C4C2788D9EB5510C',
    name: 'Swiftness Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-potion.png',
  },
  {
    contractAddress: '0xc974f3f154FD19C8D03F6dbbA1775129f93c80cb',
    name: 'Health Vial',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/health-potion.png',
  },
  {
    contractAddress: '0xA0c2Fbbb3f52bCbCAb2600322a6fBC2653518E00',
    name: 'Full Health Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/health-potion-large.png',
  },
  {
    contractAddress: '0x84B252A4930A3656a469c6b360FcBEE991D555Bd',
    name: 'Anti-Poison Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/antipoison-potion.png',
  },
  {
    contractAddress: '0x79d656A96139ED23CDf531d0dC34c000A0979c03',
    name: 'Toughness Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/toughness-potion.png',
  },
  {
    contractAddress: '0xBb9dEdfD96234315dD4899b438f9C41cD75dFdc6',
    name: 'Mana Vial',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/mana-potion.png',
  },
  {
    contractAddress: '0x27bdc0f62DA17b13Cb134102dEf58dD9d578Ee10',
    name: 'Full Mana Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/mana-potion-large.png',
  },
  {
    contractAddress: '0x4ED3e1b8D1212b2839dBB1f0EFA029792d92c90f',
    name: 'Magic Resistance Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/magic-resist-potion.png',
  },
  {
    contractAddress: '0xe6Fd594437c4B91e8bd36475977593C98Bf089a4',
    name: 'Anti-Blinding Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/blindness-potion.png',
  },
  {
    contractAddress: '0x52D8cac705430eaBd746e2bFdD7993333b6A3A07',
    name: 'Smoke Bomb',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/smoke-bomb.png',
  },
  {
    contractAddress: '0x64c4d448156d872D607605Aa091dC2786c813aF3',
    name: 'Coagulant Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/coagulant-potion.png',
  },
  {
    contractAddress: '0x59dbaaDd45ba040610DbDefb85C9c33A0470a393',
    name: 'Precision Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/precision-potion.png',
  },
  {
    contractAddress: '0x4055A5492e105D45526f7Aa350B00987ed0C7F4f',
    name: 'Spell Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/spell-potion.png',
  },
  {
    contractAddress: '0x1f59e7b0e0a350E1888c452D013B2bD2Cc763940',
    name: 'Attack Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/attack-potion.png',
  },
  {
    contractAddress: '0xd108B49Bb42817330201de3720d1300169020A5E',
    name: 'Purify Potion',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/purify-potion.png',
  },
  {
    contractAddress: '0x3A28E0D4eCF7558e1ba7357070032C5A6105B0C2',
    name: 'Greater Atonement Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal-greater.gif',
  },
  {
    contractAddress: '0xbFa812214a16EcA7814e5F5c270d7f8F37A110B5',
    name: 'Lesser Atonement Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal-lesser.gif',
  },
  {
    contractAddress: '0xab2B495902f9A6652c382e5f289423929FFF2E65',
    name: 'Atonement Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal.gif',
  },
  {
    contractAddress: '0xC6b00B4005883C1Ff09fa1351B0f49027bCAB71a',
    name: 'Chaos Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/chaos-crystal.gif',
  },
  {
    contractAddress: '0xeEe5b16Cc49e7cef65391Fe7325cea17f787e245',
    name: 'Lesser Chaos Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/chaos-crystal-lesser.gif',
  },
  {
    contractAddress: '0xb0155Fdb7B6972717C4774Fa2AEAEe9D6c0040b9',
    name: 'Greater Chaos Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/chaos-crystal-greater.gif',
  },
  {
    contractAddress: '0x1ED1a6Ed588945C59227f7a0c622Ad564229d3d6',
    name: 'Chaos Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/chaos-stone.gif',
  },
  {
    contractAddress: '0x7643ADB5AaF129A424390CB055d6e23231fFd690',
    name: 'Lesser Chaos Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/chaos-stone-lesser.gif',
  },
  {
    contractAddress: '0xEd4Bf3008afE47FE01CcC7a6648a24E326667eee',
    name: 'Greater Chaos Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/chaos-stone-greater.gif',
  },
  {
    contractAddress: '0xA9A8cc1AC7e7505a69cAca2E068716395CebE562',
    name: 'Finesse Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/finesse-crystal.gif',
  },
  {
    contractAddress: '0x9d9ef1Bf6A46b8413bf6b1b54F6A7aAb53c6b1b6',
    name: 'Lesser Finesse Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/finesse-crystal-lesser.gif',
  },
  {
    contractAddress: '0xdA16b191D1431746b6661D428A223b72c178765A',
    name: 'Greater Finesse Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/finesse-crystal-greater.gif',
  },
  {
    contractAddress: '0xe2C357ECB698C5ee97c49CCCfA8117c4b943C7B9',
    name: 'Finesse Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/finesse-stone.gif',
  },
  {
    contractAddress: '0xF1D53fa23C562246B9d8EC591eEa12Ec0288a888',
    name: 'Lesser Finesse Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/finesse-stone-lesser.gif',
  },
  {
    contractAddress: '0xF35D4f749C6ADCd4AEfE1720C5890cD38129d128',
    name: 'Greater Finesse Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/finesse-stone-greater.gif',
  },
  {
    contractAddress: '0xdbEE8C336B06f2d30a6d2bB3817a3Ae0E34f4900',
    name: 'Fortitude Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortitude-crystal.gif',
  },
  {
    contractAddress: '0xbd2677c06C9448534A851bdD25dF045872b87cb1',
    name: 'Lesser Fortitude Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortitude-crystal-lesser.gif',
  },
  {
    contractAddress: '0x3e1c80c3B916C93748Ae642c885d4BFb5D6a6BFe',
    name: 'Greater Fortitude Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortitude-crystal-greater.gif',
  },
  {
    contractAddress: '0x05305c97e9A2FDC0F5Ea23824c1348DEeD9Aff04',
    name: 'Fortitude Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortitude-stone.gif',
  },
  {
    contractAddress: '0xf599Ae2c925D3287a7fF64DC1b55C7Ea6EE3AA8f',
    name: 'Lesser Fortitude Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortitude-stone-lesser.gif',
  },
  {
    contractAddress: '0xc2eF7E4f659272ca2DaE9d3df05680783b299Cd0',
    name: 'Greater Fortitude Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortitude-stone-greater.gif',
  },
  {
    contractAddress: '0xe9BfCc80800EB77a1eAF6881825936770aF83Eb6',
    name: 'Fortune Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortune-crystal.gif',
  },
  {
    contractAddress: '0xE410b2BE2Ce1508E15009118567d02C6d7A7038e',
    name: 'Lesser Fortune Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortune-crystal-lesser.gif',
  },
  {
    contractAddress: '0x64C7D12D85050F5F0DcD075f038E5D616f30a404',
    name: 'Greater Fortune Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortune-crystal-greater.gif',
  },
  {
    contractAddress: '0xd647D8b52981eDE13ac6a5B7Ad04e212Ac38fdFb',
    name: 'Fortune Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortune-stone.gif',
  },
  {
    contractAddress: '0x934e3e2a433F37cC2D02855A43fD7Ed475EA7451',
    name: 'Lesser Fortune Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortune-stone-lesser.gif',
  },
  {
    contractAddress: '0x8FfF0f5A660b4D38441DDF6127bca42D7a2755a9',
    name: 'Greater Fortune Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/fortune-stone-greater.gif',
  },
  {
    contractAddress: '0x03e56Ded72C3a974295773355EadB38c0A85cF9D',
    name: 'Insight Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/insight-crystal.gif',
  },
  {
    contractAddress: '0xbb5F97358F60cCBa262883A3Ff0C637393FE3aB8',
    name: 'Lesser Insight Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/insight-crystal-lesser.gif',
  },
  {
    contractAddress: '0xB3F5867E277798b50ba7A71C0b24FDcA03045eDF',
    name: 'Greater Insight Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/insight-crystal-greater.gif',
  },
  {
    contractAddress: '0x74CFf096C9B027104fb1a0C2E0e265D123eA47De',
    name: 'Insight Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/insight-stone.gif',
  },
  {
    contractAddress: '0x3D112747ff2463802Afa240B62ade8F1cc4a5c7d',
    name: 'Lesser Insight Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/insight-stone-lesser.gif',
  },
  {
    contractAddress: '0x3198f51A1c8cFC5f1FeaD58feaa19E6dFc8e9737',
    name: 'Greater Insight Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/insight-stone-greater.gif',
  },
  {
    contractAddress: '0x234dCf10Db6817185F5A3b430a8CAF2B4a35e9E9',
    name: 'Might Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/might-crystal.gif',
  },
  {
    contractAddress: '0x5bAC3cAd961B01Ef9510C8e6c5402A2bB1542831',
    name: 'Lesser Might Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/might-crystal-lesser.gif',
  },
  {
    contractAddress: '0x438A4e0673b7084D6b2379a362627789D845399c',
    name: 'Greater Might Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/might-crystal-greater.gif',
  },
  {
    contractAddress: '0x37bAa710391c1D6e22396E4B7F78477F0fF2fFA7',
    name: 'Might Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/might-stone.gif',
  },
  {
    contractAddress: '0xf345b884eA45aEcb3E46CeEaEDB9CE993Ba3615a',
    name: 'Lesser Might Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/might-stone-lesser.gif',
  },
  {
    contractAddress: '0xA0851F6368AfA693a6654e9fdaf76CB6F160B837',
    name: 'Greater Might Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/might-stone-greater.gif',
  },
  {
    contractAddress: '0x3e664eB15b35783B9D3EF06702044820F08bB45B',
    name: 'Swiftness Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-crystal.gif',
  },
  {
    contractAddress: '0x6BCA53314dADdA7f4De30A95413f75a93bfAfecF',
    name: 'Lesser Swiftness Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-crystal-lesser.gif',
  },
  {
    contractAddress: '0x1459c662F516D63216491DC34F7d9d35b00dF25A',
    name: 'Greater Swiftness Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-crystal-greater.gif',
  },
  {
    contractAddress: '0x4F95D51fB8eF93704aF8C39A080c794cdA08f853',
    name: 'Swiftness Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-stone.gif',
  },
  {
    contractAddress: '0xd37aCbAC3C25a543B30aa16208637cfa6EB97eDd',
    name: 'Lesser Swiftness Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-stone-lesser.gif',
  },
  {
    contractAddress: '0x40D2c135a3E5a6f6546626795DEc67f818f0352a',
    name: 'Greater Swiftness Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/swiftness-stone-greater.gif',
  },
  {
    contractAddress: '0xcD9201F50e5Be84ECE3D8F603dcd3e9DD5e88ea2',
    name: 'Vigor Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/vigor-crystal.gif',
  },
  {
    contractAddress: '0x5e4Cf6907CB5fBe2F642E399F6d07E567155d1F8',
    name: 'Lesser Vigor Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/vigor-crystal-lesser.gif',
  },
  {
    contractAddress: '0x8780c4aa8bd0D15493D63C884bd9D427199Cf2cf',
    name: 'Greater Vigor Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/vigor-crystal-greater.gif',
  },
  {
    contractAddress: '0xA71a120931526fC98f1AcC9f769b6b0d690fB8f0',
    name: 'Vigor Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/vigor-stone.gif',
  },
  {
    contractAddress: '0x63891e0fcfEe0cEB12dE5fb96F43ADf9DbEC20a3',
    name: 'Lesser Vigor Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/vigor-stone-lesser.gif',
  },
  {
    contractAddress: '0x0A5985574369EDE9Bd871fbdad61613D4C11Dac4',
    name: 'Greater Vigor Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/vigor-stone-greater.gif',
  },
  {
    contractAddress: '0xAeb5b59c8B90D4F078046550Cc8F9f08dC127253',
    name: 'Wit Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/wit-crystal.gif',
  },
  {
    contractAddress: '0xC989c916F189D2A2BE0322c020942d7c43aEa830',
    name: 'Lesser Wit Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/wit-crystal-lesser.gif',
  },
  {
    contractAddress: '0x9d1f44b0EC7BB80656FC8Fcd65152513f29a606D',
    name: 'Greater Wit Crystal',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/wit-crystal-greater.gif',
  },
  {
    contractAddress: '0x3971212Ec22147EE8808cB84F743DD852Be92f9C',
    name: 'Wit Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/wit-stone.gif',
  },
  {
    contractAddress: '0xFC943eBd19112D6c6098412238E4E8319641B3d8',
    name: 'Lesser Wit Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/wit-stone-lesser.gif',
  },
  {
    contractAddress: '0xa1BD7683fA348e256a2de8a9dDB55E5ea01eB048',
    name: 'Greater Wit Stone',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/wit-stone-greater.gif',
  },
  {
    contractAddress: '0xBbd7c4Be2e54fF5e013471162e1ABAD7AB74c3C3',
    name: 'Raffle Ticket',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/raffle-ticket.png',
  },
  {
    contractAddress: '0xAcDa84fAb3d3cdB38078b04901a26c103C37E7F4',
    name: 'Regular Pet Treat',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-regular.png',
  },
  {
    contractAddress: '0x8Df3fFa5a677ba9737CE8Afcb8dd15Bd74085adD',
    name: 'Premium Pet Treat',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-premium.png',
  },
  {
    contractAddress: '0xBCd74403f82c61E247f2ba2A546EB3d0D2296936',
    name: 'Void Shard',
    logo: 'https://defi-kingdoms.b-cdn.net/art-assets/items/void.gif',
  },
]

export { parseTokenInfo }
