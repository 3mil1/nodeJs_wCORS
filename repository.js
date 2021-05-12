const users = [
    {"id": 1, "name": "Emil"}, {"id": 2, "name": "Eliise"}
]

const getUsers = () => {
    return users;
}

const addUser = (name) => {
    users.push({name})
}


exports.getUsers = getUsers
exports.addUser = addUser
