module.exports = {
	purge: ['./pages/**/*.(ts|tsx)$', './components/**/*.(ts|tsx)$'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				secondary: 'var(--color-bg-secondary)',
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
