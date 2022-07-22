const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String }
}, {
    
    versionKey: false
});


const users = mongoose.model('client', userSchema);


module.exports = users;