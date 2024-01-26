const db = require('../config/db');
const timestamp = require('../middlewares/timestamp');
const uuid = require('uuid');

class User {
    static async getProfile(id) {
        try {
            let sql = `SELECT first_name, last_name, email FROM accounts WHERE id = ?`;

            const [user] = await db.execute(sql, [id]);

            return user[0];
        } catch (error) {
            console.error('Error in getProfile:', error);
            throw error; // Re-throw the error for handling at a higher level
        }
    }

    static async getName(id) {
        try {
            let sql = `SELECT first_name FROM accounts WHERE id = ?`;

            const [user] = await db.execute(sql, [id]);

            return user[0];
        } catch (error) {
            console.error('Error in getName:', error);
            throw error; // Re-throw the error for handling at a higher level
        }
    }
}

module.exports = User;
