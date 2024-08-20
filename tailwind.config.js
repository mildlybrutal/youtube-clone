/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"youtube-red": "#FF0000",
				"youtube-black": "#282828",
			},
			fontFamily: {
				youtube: ["Roboto", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		function ({ addUtilities }) {
			const newUtilities = {
				".scrollbar-hide": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
