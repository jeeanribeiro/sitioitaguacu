import tseslint from 'typescript-eslint';
import sveltePlugin from 'eslint-plugin-svelte';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
	{ ignores: ['.svelte-kit/**', 'build/**', 'node_modules/**'] },
	...tseslint.configs.recommended,
	...sveltePlugin.configs['flat/recommended'],
	prettierConfig,
	{
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: { ...globals.browser, ...globals.node, ...globals.es2017 }
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: { parser: tseslint.parser }
		}
	}
);
