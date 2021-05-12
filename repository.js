const {writeJsonFromFile} = require("./fs-utils");
const {readJsonFromFile} = require("./fs-utils");

const getUsers = () => {
    return readJsonFromFile("db")
}

const addUser = async (name) => {
    const users = await getUsers()
    users.push({name})
    await writeJsonFromFile("db", users)
}

exports.getUsers = getUsers
exports.addUser = addUser
