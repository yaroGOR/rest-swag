const swaggerJSDoc = require('swagger-jsdoc')
const definition = require('./basicInfo')

const options = {
    swaggerDefinition: definition,
    apis: ["./app.js"],

}

var swaggerSpec=swaggerJSDoc(options)

module.exports= swaggerSpec