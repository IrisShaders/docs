import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
	site: 'https://shaders.properties',
	markdown: {
		rehypePlugins: [rehypeHeadingIds, rehypeAutolinkHeadings],
	},
	integrations: [
		starlight({
			components: {
				Head: './src/components/Head.astro',
			},
			title: 'Iris Docs',
			logo: {
				src: '/src/assets/iris.webp',
			},
			customCss: [
				'/src/styles/root.css',
			],
			social: [
			   	{ icon: 'github', label: 'GitHub', href: 'https://github.com/IrisShaders/DocsPage/' },
   				{ icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/jQJnav2jPu' },
			],
			editLink: {
				baseUrl: 'https://github.com/IrisShaders/DocsPage/edit/main/',
			},
			sidebar: [
				{
					label: 'Iris',
					autogenerate: { directory: 'current', collapsed: true },
				},
				{
					label: 'Aperture',
					autogenerate: { directory: 'aperture', collapsed: true },
					badge: "Beta",
				},
			],
			plugins: [
				starlightImageZoom(),
				starlightUtils({
					multiSidebar: {
						switcherStyle: "horizontalList",
					},
				}),
			]
		}),
	]
});
