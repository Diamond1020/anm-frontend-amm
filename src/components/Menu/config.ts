import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://anmswap.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://anmswap.com/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://anmswap.com/pools'
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://anmswap.com/lottery',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/anmfinance/',
      },
    ],
  }
]

export default config
