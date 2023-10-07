import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'The Femmepedia',
  description: 'A discussion of feminism... so I can stop repeating myself',
  author: {
    name: 'Katniss Evermean',
    twitter: '',
    url: 'https://femmepedia.net',
    email: 'spam@femmepedia.net',
    summary: 'Honest feminist'
  },
  org: {
    name: 'Katniss Evermean',
    twitter: '',
    url: 'https://femmepedia.com',
    email: 'spam@femmepedia.com',
    summary:
      ''
  },
  location: 'USA',
  latlng: [25.0, -71.0] as [number, number],
  repository: 'https://github.com/femmepedia',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  // { name: 'About', href: 'about' },
  { name: 'Blog', href: 'blog' },
  { name: 'Contact', href: 'contact' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/femmepedia/site`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
