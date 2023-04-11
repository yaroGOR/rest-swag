const swaggerJSDoc = require('swagger-jsdoc')
const definition = require('./basicInfo')

const options = {
    swaggerDefinition: definition,
    apis: ["./docs/swaggerDocs.js"],

}

var swaggerSpec=swaggerJSDoc(options)

module.exports= swaggerSpec