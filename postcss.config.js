const purgecss = require('@fullhuman/postcss-purgecss')
const postcssNesting = require('postcss-nesting');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        postcssNesting
    ]
}


// purgecss({
//     content: ['themes/novela/layouts/**/*.html'],
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//     })

