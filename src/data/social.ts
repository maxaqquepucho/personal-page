import type { Icon } from '@phosphor-icons/react'
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
} from '@phosphor-icons/react/ssr'

export interface SocialLink {
  name: string
  url: string
  icon: Icon
  hideName?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Github',
    url: 'https://github.com/maxaqquepucho',
    icon: GithubLogo,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/maxaqq/',
    icon: LinkedinLogo,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maxaqq/',
    icon: InstagramLogo,
    hideName: true,
  },
  {
    name: 'X',
    url: 'https://x.com/maxaqq',
    icon: XLogo,
    hideName: true,
  },
]
