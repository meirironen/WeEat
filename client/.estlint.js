module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'class-property',
        'css-modules',
        'flowtype',
        'fp',
        'import',
        'jest',
        'lodash',
        'promise',
        'react-redux',
        'react-hooks',
    ],
    extends: [
        'eslint:recommended',
        'airbnb',
        'plugin:promise/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:react-redux/recommended',
        'plugin:lodash/recommended',
        'plugin:flowtype/recommended',
        'plugin:jest/recommended',
        'plugin:css-modules/recommended',
        'prettier',
        'prettier/react',
        'prettier/flowtype',
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        JumioClient: true,
        fail: true,
        // we're defining only select global vars to avoid accidental resolution of local vars on window
        // e.g. local variable `location` that's accidentally not declared gets resolved to `window.location`
        newrelic: true,
        __DEVELOPMENT__: true,
        __TEST__: true,
        __PRODUCTION__: true,
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'app', 'app/scripts', 'app/scripts/components', 'tests'],
            },
        },
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
        'css-modules': {
            basePath: 'app/scripts',
        },
        react: {
            version: 'detect',
            flowVersion: '0.102.0',
        },
    },
    rules: {
        'array-bracket-spacing': ['off', 'always'],
        'arrow-body-style': 'off',
        'arrow-spacing': 'error',
        camelcase: ['error', { properties: 'never' }],
        'class-methods-use-this': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
            },
        ],
        'consistent-return': 'off', // pretty controversial rule as in we're often ok with returning implicit `undefined`
        'func-names': 'off',
        'getter-return': 'off',
        'guard-for-in': 'off',
        'id-length': ['error', { exceptions: ['$', '_', 'v', 'w', 'h', 'i', 'j'] }],
        'lines-between-class-members': 'off',
        'no-console': 'error',
        'no-else-return': 'off', // TODO: revist this
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-multiple-empty-lines': 'off',
        'no-param-reassign': 'off', // there are legitimate cases for this such as `reduce`
        'no-plusplus': 'off', // so that we can use ++
        'no-process-env': ['error'],
        'no-prototype-builtins': 'off',
        'no-restricted-globals': ['error', { name: 'find' }], // certain lodash methods like `find` can conflict with globals
        'no-restricted-imports': ['error', { patterns: ['../../*', 'moment'] }],
        'no-restricted-modules': ['error', { patterns: ['../../*', 'moment'] }],
        'no-restricted-syntax': 'off', // so that we can use for..in
        'no-script-url': 'off', // this doesn't make sense for an SPA
        'no-shadow': 'off', // we have too much shadowing right now; temporarily disabling and we can revisit it later
        'no-underscore-dangle': 'off',
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // there are lots of `foo && foo()` occurrences in code
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        'object-curly-spacing': ['error', 'always'],
        'padded-blocks': 'off',
        'prefer-destructuring': 'off',

        'react/jsx-filename-extension': 'off',
        'react/destructuring-assignment': 'off',
        'react/sort-comp': 'off',
        'react/require-default-props': 'off',
        'react/prefer-es6-class': 'always',
        'react/jsx-fragments': ['error', 'syntax'],
        // this is no longer relevant now that we're transitioning to Flow
        'react/no-unused-prop-types': 'off',
        // Opinionated moan about single quotes in HTML
        // ' can be replaced with &apos;, &lsquo; or &rsquo;
        'react/no-unescaped-entities': 'off',
        // This is a lovely rule, but we have to stop passing around
        // giant objects. (ie. member object) For now, turning this off.
        'react/forbid-prop-types': 'off',
        // it is sometimes impossible to have a key other than an index
        // e.g. when creating a list of text chunks that could be non-unique
        // and have no unique id since they are purely presentational
        'react/no-array-index-key': 'off',
        // TODO: possibly fix this later but for now we have components relying on custom style attributes
        'react/style-prop-object': 'off',
        'react/prop-types': 'off',
        'react/no-direct-mutation-state': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
        'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
        'react/state-in-constructor': ['error', 'never'],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // TODO: this looks very useful but we have way too many errors right now.
        // Should definitely revisit
        'promise/catch-or-return': 'off',
        'promise/always-return': 'off',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/no-nesting': 'error',
        'promise/param-names': 'error',

        // TODO: revisit this together with other accessibility improvements
        // these are a little too advanced/unnecessary for us at the moment
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        // See: https://github.com/facebook/create-react-app/issues/2631#issuecomment-312894470
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',

        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                json: 'always',
            },
        ],

        // turning this off until this is fixed https://github.com/airbnb/javascript/issues/1168
        'import/no-extraneous-dependencies': 'off',
        'import/no-duplicates': 'error',
        // TODO: can we do anything about this?
        'import/prefer-default-export': 'off',
        // doesn't make sense for us since we use named exports w. default ones quite often
        'import/no-named-as-default': 'off',

        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            },
        ],

        // functional goodies, but turned off for now since we have too many of them
        'fp/no-let': 'off',

        'jest/prefer-to-have-length': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-commented-out-tests': 'error',

        // native functions are simpler and faster
        'lodash/prefer-lodash-method': 'off',

        // TODO: revisit
        'lodash/prefer-map': 'off',
        'lodash/prefer-noop': 'off',
        'lodash/import-scope': ['error', 'member'],
        'lodash/prefer-flat-map': 'off',
        'lodash/chaining': 'error',
        'lodash/prop-shorthand': 'off',
        'lodash/prefer-lodash-chain': 'off',
        'lodash/chain-style': 'off',
        'lodash/unwrap': 'off',
        'lodash/prefer-reject': 'off',
        'lodash/path-style': 'off',
        'lodash/prefer-constant': 'off',
        'lodash/prefer-lodash-typecheck': 'off',
        // turn this back on when we get whitelist option https://github.com/wix/eslint-plugin-lodash/issues/171
        'lodash/preferred-alias': 'off',
        'lodash/prefer-is-nil': 'off',
        'lodash/prefer-get': 'off',
        'lodash/prefer-includes': 'off',

        'flowtype/no-dupe-keys': 'error',
        'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]*)+$'],
        'flowtype/require-valid-file-annotation': 'error',
        'flowtype/no-unused-expressions': ['error', { allowShortCircuit: true }],
        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/array-style-complex-type': ['error', 'verbose'],
        'flowtype/array-style-simple-type': ['error', 'verbose'],
        'flowtype/no-weak-types': ['error', { any: true, Function: true, Object: true }],
        'flowtype/no-mixed': 'error',
        'flowtype/no-flow-fix-me-comments': [2, 'TODO\\s+[\\w\\(]+'],
        'flowtype/require-readonly-react-props': 'error',

        'css-modules/no-unused-class': 'off',

        'react-redux/mapStateToProps-prefer-parameters-names': 'off',
        // we pass inline objects sometimes
        'react-redux/connect-prefer-named-arguments': 'off',
        // we don't conform to this
        'react-redux/prefer-separate-component-file': 'off',
        // we often call these "props"
        'react-redux/mapDispatchToProps-prefer-parameters-names': 'off',
    },

    overrides: [
        {
            files: [
                'tests/**/*',
                'script/**/*',
                'app/scripts/**/*-test.jsx',
                'app/scripts/**/*-story.jsx',
                'app/scripts/storybook/storiesOf.jsx',
            ],
            rules: {
                'no-process-env': 'off',
            },
        },
    ],
};