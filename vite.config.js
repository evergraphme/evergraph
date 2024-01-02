import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [
		sveltekit(),
		nodePolyfills({
			globals: {
				Buffer: true,
				process: false,
				global: true
			},
			protocolImports: true
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});