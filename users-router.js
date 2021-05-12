const {getUsers, addUser} = require('./repository')
const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const users = await getUsers()
    let user = users.find(u => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.sendStatus(404)
    }
})

router.post('/', async (req, res) => {
    let result = await addUser("Max")
    res.send({success: true})
})

module.exports = router;

