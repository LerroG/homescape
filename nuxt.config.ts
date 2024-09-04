// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			Inter: [100, 300, 400, 700, 900]
		}
	}
})
