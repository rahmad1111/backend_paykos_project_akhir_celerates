const jwt = require('jsonwebtoken')
require('dotenv').config()

const encode = async (user) => {
    const token = jwt.sign({ 
        id: user.id 
    }, process.env.JWT_SECRET, 
    { 
        expiresIn: '7s'
    })
    return token
}

module.exports = {encode}