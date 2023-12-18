import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	compilerOptions: {
		customElement: true, // Allows us to export type-tester as a webcomponent
	},

	kit: {
		adapter: adapter()
	}
};

export default config;
