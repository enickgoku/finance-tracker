require('dotenv/config')
const connectDB = require('./src/db/config')
const moongoose = require('mongoose')
const User = require('./src/db/models/User')
const seeds = require('./src/db/seeds/userSeeds')

const { PORT = 5001 } = process.env

const app = require('./app')

const connect = async () => {
  try {
    await connectDB()
    await User.deleteMany({})
    console.log('Deleted all users')
    await User.create(seeds)
    console.log('Created users')
    moongoose.connection.close()
    console.log('Closed connection')
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  }
  catch (err) {
    console.log(err)
  } 
}

connect()
