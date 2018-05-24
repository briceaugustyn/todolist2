const list = require('../models/surveys.js')
const passport = require('passport')

module.exports = (app) => {
app.get('/api/list', (req, res) => {
    var user =  req.user[0].id
    list.view(user).then( result => {
        res.send(result)
    })
})
}