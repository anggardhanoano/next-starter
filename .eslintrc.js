module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-fragments': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.ts', '.tsx', 'js', 'jsx'] }
        ]
    },
    settings: {
        react: {
            version: 'latest'
        }
    }
};
