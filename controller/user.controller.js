const jwt = require('jsonwebtoken');
const { models } = require('../sequize-config');
const helper = require('../services/helper');
const config = require('../config');
// Login user

const Login = async (req, res, next) => {
  try {
    const getLoginUser = await models.User.findOne({
      where: { userName: req.body.userName },
      logging: true,
    });
    console.log(req.body.password, getLoginUser.password);
    const passwordMatch = await helper.comparePassword(req.body.password, getLoginUser.password);
    console.log(passwordMatch);

    if (passwordMatch) {
      const payload = {
        id: getLoginUser.id,
        userName: getLoginUser.userName,
      };
      // const generate_token = jwt.sign(payload, config.jwtSecret);

      return res.json({
        getLoginUser,
      });
    }
    return res.status(403).json({ message: 'Invalid User' });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const getUser = await models.User.findOne({
      attributes: ['emailId', 'userName'],
      where: { userName: req.body.userName },
    });
    if (!getUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: getUser });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
};

// const signUp = (req, res) => {
//   const { username, email, password } = req.body;

//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) return res.status(500).send('Error hashing password');
//     const query = `INSERT INTO users (userName, emailID, password) VALUES (${username}, ${email}, ${password})`;
//     db.sequelize.query(query, [username, hashedPassword], (err) => {
//       if (err) {
//         if (err.code === 'ER_DUP_ENTRY') {
//           return res.status(400).send('Username already taken');
//         }
//         return res.status(500).send('Error registering user');
//       }
//       res.status(200).send('User registered');
//     });
//   });
// };

const signUp = async (req, res, next) => {
  try {
    const searchUser = await models.User.findAndCountAll({
      where: {
        emailId: req.body.emailId,
      },
      logging: true,
    });

    const password = await helper.hashPassword(req.body.password);

    if (searchUser.count == 0) {
      const addUser = await models.User.create({
        emailId: req.body.emailId,
        userName: req.body.userName,
        password: password,
      });
      if (addUser) {
        res.json({
          message: `Successfully Signed In to Netflix ${addUser.userName}`,
        });
      }
    } else {
      return next({
        status: 400,
        message: ['user already exits'],
      });
    }
  } catch (error) {
    console.log(error);
    return next({
      status: 400,
      message: error.message,
    });
  }
};

module.exports = { signUp, Login, getUser };
