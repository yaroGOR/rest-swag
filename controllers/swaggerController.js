const fs = require('fs')
class Swagger {
    constructor(){

    }


   async sendView(req, res) {
    try {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('view/index.html',"utf8", (error, data) => {
            res.write(data)
            res.end()
        })
    } catch (error ) {
        console.log(error)
    }

    }
}

module.exports = new Swagger()