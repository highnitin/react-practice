/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			".vertical-lr": {
				writingMode: "vertical-lr",
			},
		},
	},
	plugins: [],
};
