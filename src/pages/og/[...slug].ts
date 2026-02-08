import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path: string, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      description: page.data.description,
      logo: { path: './src/assets/og_banner.png', size: [350] },
      backgroundImage: `linear-gradient(rgba(24, 24, 27, 0.4), rgba(24, 24, 27, 0.4)), url('/assets/banner.png')`,
      bgGradient: [[24, 24, 27]],
      border: { color: [76, 108, 178], width: 20 },
      padding: 120,
    }
  },
})
