// replace this with the right data 
const db = require('../config/db')
const timestamp = require('../middlewares/timestamp')
const uuid = require('uuid')

class User {
    static async getProfile(id) {

        let sql = `SELECT first_name, last_name, email FROM accounts WHERE id = '${id}'`

        const [user] = await db.execute(sql)

        return user[0]

    }


    static async getName(id) {

        let sql = `SELECT first_name FROM accounts WHERE id = '${id}'`

        const [user] = await db.execute(sql)

        return user[0]

    }

}

module.exports = User