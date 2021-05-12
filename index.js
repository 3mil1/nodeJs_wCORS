const http = require('http');


const server = http.createServer((req, res) => {

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return
    }


    console.log('some req')

    switch (req.url) {
        case "/users":
            res.write('[{"id": 1, "name": "Emil"}, {"id": 2, "name": "Eliise"}]')
            break;
        case "/lessons":
            res.write('tasks')
            break
        default:
            res.write('page not found')

    }
    res.end()
})

server.listen(7442)


console.log(http)
