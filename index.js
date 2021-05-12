const http = require('http');
const {getUsers, addUser} = require('./repository')

const cors = (req, res) => {
// Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}


const server = http.createServer((req, res) => {
    if (cors(req, res)) return;


    console.log('some req')

    switch (req.url) {
        case "/users":
            if (req.method === "POST") {
                addUser("Max")
                res.write(JSON.stringify({success: true}))
            } else {
                res.write(JSON.stringify(getUsers()))
            }
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
