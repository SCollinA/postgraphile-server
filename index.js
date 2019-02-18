const db = require('./db')

const express = require('express')
// const session = require('express-session')
const { postgraphile } = require("postgraphile")
// const store = new (require('connect-pg-simple')(session))({ pgPromise: db })

const app = express()
const port = 7000

// app.use(session({
//     store,
//     secret: 'sUpErS3cR3t',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 } // 1 days
// })) 

app.use(postgraphile(process.env.DATABASE_URL || 'postgres:///', 'public', {
    graphiql: true,
}))

app.listen(port, () => console.log(`task-attack-back listening on port ${port}`)) 