// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/index.css'],
	plugins: [
		{ src: '~/plugins/facebook-pixel.client.js', mode: 'client' }
	  ],
	app: {
		baseURL: '',
		pageTransition: {
			name: 'fade',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'fade',
			mode: 'out-in',
		},
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: 'favicon.ico',
				},
			],
		},
	},
	modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxt/content'],
	ssr: true,
})
