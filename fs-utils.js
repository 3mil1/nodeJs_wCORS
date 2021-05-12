const fs = require("fs")


exports.readJsonFromFile = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
}

exports.writeJsonFromFile = (filepath, data) => {
    return new Promise((res, rej) => {
        fs.watchFile(filepath, JSON.stringify(data), (err) => {
            if (err) rej(err)
            res()
        })
    })
}
