import collection from './mongo'
import passport from 'passport'
import PassportLocal from 'passport-local'
import crypto from 'crypto'

const collectionName = 'users'

const getHash = (value) => {
    const sha = crypto.createHmac('sha256', value)
    sha.update(value)
    return sha.digest('hex')
}

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((user, done) => {
    collection(collectionName).findOne(user._id).then((userDoc) => {
        done(null, userDoc)
    })
})

passport.use(new PassportLocal(
    {
        usernameField    : 'username',
        passwordField    : 'password',
        passReqToCallback: true
    },
    (req, name, password, done) => {
        process.nextTick(() => {
            collection(collectionName).findOne({username: name}).then((user) => {
                const hashedPassword = getHash(password)
                if (user === null || user.password !== hashedPassword) {
                    return done(null, false)
                }
                return done(null, user)
            }).catch((err) => {
                return done(err)
            })
        })
    }
))

export default passport
