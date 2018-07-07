import { resolve } from 'path';

import ts from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

export default {
	input: resolve(__dirname, './src/index.ts'),
	output: [
		{
			file: resolve(__dirname, './dist/hello-plugin.umd.js'),
			format: 'umd',
			sourcemap: true,
			name: 'HelloPlugin',
			globals: {
				vue: 'Vue'
			}
		},
		{
			file: resolve(__dirname, './dist/hello-plugin.es.js'),
			format: 'es',
			sourcemap: true
		}
	],
	plugins: [
		ts({
			clean: true,
			verbosity: 3 // Debug
		}),
		vue()
	],
	external: ['vue']
};
