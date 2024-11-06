const mongoose = require('mongoose')

const dbConnect = () => {
    const db_uri = process.env.DB_URI
    mongoose.set('strictQuery', false)

    try {
        mongoose.connect(db_uri)
    } catch (error) {
        console.err("The connection to the DB could not be established:", error)
    }
    mongoose.connection.on('connected', () => console.log('Connected to the DB'));
}

module.exports = dbConnect