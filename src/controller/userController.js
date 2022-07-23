const User = require ('../models/userModel')


const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = senhaComHash;
    const newUser = new User(req.body);

    newUser.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(newUser.toJSON())
    })
};

module.exports = {
    create
}