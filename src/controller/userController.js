const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

const { SECRET } = process.env;

const create = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(201).send(newUser);
  });
};

const getAll = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(200).send(users);
  });
};

const login = (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      return res.status(500).send({ message: 'Unable to login' });
    }
    if (!user) {
      return res.status(404).send(`No user found with email: ${req.body.email}`);
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!validPassword) {
      return res.status(403).send('Invalid password');
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(` token: ${token} `);
  });
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: `User with ID ${id} was successfully deleted` });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  login,
  getAll,
  deleteById,
};
