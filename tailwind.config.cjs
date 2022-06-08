module.exports = {
	content: ['./src/**/*{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins']
			},
			boxShadow: {
				glow: '0px 10px 48px -4px rgba(185,28,28,0.75)'
			},
			backgroundImage: {
				hackftw: '/hackftw.png',
				placeholder2: "url('https://via.placeholder.com/1920x1080')"
			}
		}
	},
	plugins: [require('tailwind-scrollbar'), require('tailwindcss-animation-delay')]
};
