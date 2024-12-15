const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const login = async (req, res) => {
    try {
        const user = await User.findAll({
            where: { nomer_pengguna: req.body.nomer_pengguna }
        });
    
        if (user.length === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "Wrong User Number" 
            });
        }
    
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ message: "Wrong Password" });
    
        const userId = user[0].id;
        const nama = user[0].nama;
        const nomer_pengguna = user[0].nomer_pengguna;
        const roles = user[0].roles;
    
        const accessToken = jwt.sign({ userId, nama, nomer_pengguna }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        const refreshToken = jwt.sign({ userId, nama, nomer_pengguna }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
    
        await User.update({ refresh_token: refreshToken }, { where: { id: userId } });
    
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
    
        res.json({
            success: true,
            userId,
            nama,
            roles,
            accessToken
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message || "Internal Server Error" 
        });
    }
};
// const user = await User.findOne({
//     where: {
//         nomer_pengguna: req.body.nomer_pengguna
//     },
// });

// if (!user) {
//     return res.status(401).json({ message: 'Invalid user' });
// }
// const match = await bcrypt.compare(req.body.password);

// if (user.password === req.body.password) {
//     const token = jwt.sign(
//         { id: user.id, roles: user.roles },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//     );

//     res.json({
//         status: 200,
//         message: 'Login success',
//         token: token,
//     });
// } else {
//     res.status(401).json({ message: 'Invalid password' });
// }

const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await User.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const token = require('../utils/token')
// const helperpassword = require('../utils/password')

// const login = async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             nomer_pengguna : req.body.nomer_pengguna
//         },
//         attributes: [
//             'id',
//             'nama',
//             'roles'
//         ]

//     })
//     if (!user) {
//         return res.status(401).json({
//             message: 'Invalid email'
//         })
//     }
//     if (user.password == req.body.password) {
//         res.json({
//             status: 200,
//             message: 'Login success',
//             // token: tokenDataString,
//             user: user
//         })
//     } else {
//         res.status(401).json({
//             message: 'Invalid password'
//         })
//     }
//     // if (!isPasswordValid) {
//     //     return res.status(401).json({
//     //         message: 'Invalid password'
//     //     })
//     // }

//     // const tokenDataString = token.encode(user)


// }

// const login = async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             nomer_pengguna: req.body.nomer_pengguna
//         },
//         attributes: ['id', 'nama', 'roles', 'password']
//     });

//     if (!user) {
//         return res.status(401).json({ message: 'Invalid user' });
//     }

//     if (await bcrypt.compare(req.body.password, user.password)) {
//         const token = jwt.sign(
//             { id: user.id, roles: user.roles },
//             'SECRET_KEY',
//             { expiresIn: '1h' }
//         );

//         const { id, nama, roles } = user;
//         res.json({
//             status: 200,
//             message: 'Login success',
//             token: token,
//             user: { id, nama, roles }
//         });
//     } else {
//         res.status(401).json({ message: 'Invalid password' });
//     }
// };

module.exports = { login, logout }