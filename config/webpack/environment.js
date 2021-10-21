const dotenv = require('dotenv')
const result = dotenv.config()
console.log(result)

const { environment } = require('@rails/webpacker')

module.exports = environment
