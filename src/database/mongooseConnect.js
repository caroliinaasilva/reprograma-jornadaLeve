const DATABASE_URI = "mongodb+srv://caroliinaasilva_:Carolzinha1.@cluster0.sprzi.mongodb.net/reprograma-jornadaLeve"
const mongoose = require('mongoose')


const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco conectado!')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}