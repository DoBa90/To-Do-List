module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(js)$": "babel-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/**.{js,vue}", "!**/node_modules/**"]
}
