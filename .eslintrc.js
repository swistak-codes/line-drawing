// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
        'extraFileExtensions': ['.svelte'],
    },
    'plugins': [
        'svelte3',
        '@typescript-eslint',
    ],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    settings: {
    // eslint-disable-next-line no-undef
        'svelte3/typescript': require('typescript'),
    },
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'space-infix-ops': ['error'],
        'brace-style': 'error',
        'object-curly-spacing': [
            'error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false },
        ],
        'array-bracket-spacing': [
            'error', 'never',
        ],
    },
};
