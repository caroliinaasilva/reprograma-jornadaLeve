const User = require ('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET


const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

    const novoCadastro = new User(req.body)
    novoCadastro.save(function (err) {
      if (err) {
        res.status(500).send({message: err.message})
      }
      res.status(201).send(novoCadastro)
    })
  }


  const getAll = (req, res) => {
    User.find(function (err, colaboradoras){
        if(err){
            res.status(500).send({message: err.message})
        }
        res.status(200).send(colaboradoras)
    })
}


  const login = (req, res) => {
    User.findOne({email: req.body.email}, function (error, user) {
      if (error) {
        return res.status(500).send({message: 'Não é possivel fazer o login'})
      }
      if (!user) {
        res.status(404).send(`Não existe cadastro com esse email: ${req.body.email}`)
      }

      const passwordValid = bcrypt.compareSync(req.body.senha, user.senha)

      if (!passwordValid) {
        res.status(403).send('Senha não é válida')
      }

      const token = jwt.sign({email: req.body.email}, SECRET)
       return res.status(200).send(token)
    })

  }
  const deleteById = async (req, res) => {
    try{
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).json({message: `a user com o  ${id} foi deletada com sucesso`})
    } catch (err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}
module.exports = {
    create,
    login,
    getAll,
    deleteById
}