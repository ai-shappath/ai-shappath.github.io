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
			script: [
				{
				  hid: 'fb-pixel',
				  innerHTML: `
					!function(f,b,e,v,n,t,s)
					{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};
					if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
					n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t,s)}(window, document,'script',
					'https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '1623671601696404');
					fbq('track', 'PageView');
				  `,
				},
			  ],
			noscript: [
				{
				innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1623671601696404&ev=PageView&noscript=1"/>',
				body: true
				}
			]
		},
	},
	modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxt/content'],
	ssr: true,
})
