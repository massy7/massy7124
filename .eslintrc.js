module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        'indent': [2, 4, {
            'SwitchCase': 1,
        }],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon' : true,
            'align'      : 'colon'
        }],
        'no-multi-spaces': 0,
        'brace-style'    : ['error', 'stroustrup']
    },
    globals: {}
}
