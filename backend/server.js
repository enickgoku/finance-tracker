require('dotenv/config')
const mongoose = require('mongoose')
const User = require('./src/db/models/User')
const seeds = require('./src/db/seeds/userSeeds')

const { PORT = 5001 } = process.env

const app = require('./app')

const seedDB = async () => {
  await User.deleteMany({})
  await User.insertMany(seeds)
}

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('Connected to MongoDB')
    await seedDB()
    console.log('Seeded DB')
    return app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

connect()
