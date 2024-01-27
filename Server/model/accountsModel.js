const db = require('../config/db')
const timestamp = require('../middlewares/timestamp')
const validator = require('validator')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

class Accounts {

    // handle user signUp operations 
    static async signUp (Name , email , password , confirmPassword) {

        const id =  uuid.v4()
        const created_at = await timestamp()

        // validate email and password 
        if (!Name || !email || !password || !confirmPassword) throw Error('All fields must be filled');
        if (!validator.isEmail(email)) throw Error ("Invalid Email Address")


        // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
        if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")

        const isExist = await this.userExist(email)

        if (isExist) throw Error('User Exists')
        else {
            // to hash passowords
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password , salt )


            let sql = `INSERT INTO accounts (id, Name, email, password, created_at)
            VALUES ('${id}', '${Name}', '${email}', '${hash}', '${created_at}')
`

            await db.execute(sql)
        }
    } 



    static async login(email , password ) {

        // validate email and password 
        if (!email || !password) throw Error('All feilds must be filled')
        if(!validator.isEmail(email)) throw Error('Invalide email address')

         // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
         if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")

         const user = await this.userExist(email)

         if(!user) throw Error('User dooes not exist')
         const match = await bcrypt.compare(password , user.password)

         if(!match) throw Error('incorrect password')

         return { id: user.id , name: user.name}

    }


    static async userExist(email){
        let sql = `SELECT * FROM accounts WHERE email='${email}'`

        const [user] = await db.execute(sql)

        return user[0]
    }
}

module.exports = Accounts