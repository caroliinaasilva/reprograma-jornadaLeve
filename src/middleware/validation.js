const validatePatient = (req, res, next) => {
  const { fullName, cpf, dateOfBirth } = req.body;
  
  if (!fullName || !cpf || !dateOfBirth) {
    return res.status(400).json({ 
      message: 'Missing required fields: fullName, cpf, dateOfBirth' 
    });
  }
  
  if (typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({ 
      message: 'fullName must be a string with at least 2 characters' 
    });
  }
  
  if (typeof cpf !== 'string' || cpf.length !== 11) {
    return res.status(400).json({ 
      message: 'cpf must be a string with exactly 11 digits' 
    });
  }
  
  return next();
};

const validatePsychologist = (req, res, next) => {
  const { fullName, crp } = req.body;
  
  if (!fullName || !crp) {
    return res.status(400).json({ 
      message: 'Missing required fields: fullName, crp' 
    });
  }
  
  if (typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({ 
      message: 'fullName must be a string with at least 2 characters' 
    });
  }
  
  if (typeof crp !== 'string' || crp.trim().length < 3) {
    return res.status(400).json({ 
      message: 'crp must be a valid string' 
    });
  }
  
  return next();
};

const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ 
      message: 'Missing required fields: name, email, password' 
    });
  }
  
  if (typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ 
      message: 'name must be a string with at least 2 characters' 
    });
  }
  
  if (typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ 
      message: 'email must be a valid email address' 
    });
  }
  
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ 
      message: 'password must be a string with at least 6 characters' 
    });
  }
  
  return next();
};

module.exports = {
  validatePatient,
  validatePsychologist,
  validateUser,
}; 