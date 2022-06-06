const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const shortid = require('shortid')

router.post('/registration', async (req, res) => {

    const { name, login, mail, password } = req.body;
    if(!name ||  !login || !mail || !password ){
      return res.status(200).json({msgType: 'err', msg: 'Заполните все обязательные поля'})
    }

    const candidate = await User.findOne({ login })
    if (candidate) {
      return res.status(200).json({msgType: 'err', msg: 'Пользователь с таким логином уже существует'})
    }
    const hashPassword = bcrypt.hashSync(password, 7)
    const user = new User({ name, login, mail, password: hashPassword })
    await user.save()
    console.log(123)
    res.status(200).json({msgType: 'success', msg: 'Регистрация прошла успешно'})

});
router.post('/login', async (req, res) => {

    const { login, password } = req.body;
    const candidate = await User.findOne({ login })
    if (!candidate) {
      return res.status(200).json({msgType: 'err', msg: 'Пользователь с таким логином не существует'})
    }
    const validPassword = await bcrypt.compare(password, candidate.password)
    if (!validPassword) {
      return res.status(200).json({msgType: 'err', msg: 'Неверно указан пароль'})
    } else {
      const token = bcrypt.hashSync(shortid.generate(), 2)
      await User.updateOne({ login: candidate.login }, { token: token })
      console.log(token)
      res.cookie('token', token, { maxAge: 900000, httpOnly: true })

      res.status(200).json({msgType: 'success', msg: 'Вы успешно вошли'})
    }


});
router.get('/logout', (req, res) => {

    res.clearCookie("token",  { httpOnly: true });
    res.status(200).json({msgType: 'success', msg: 'Вы успешно вышли'})

}
);
router.get('/checkauth', (req, res) => {
  const token = req?.cookies?.token || false;
  console.log(token)
  User.findOne({ token }).then(candidate => {
    console.log(candidate)
    if (!candidate || !token) {
      res.status(200).json({isAuth:false})
    } else {
      res.status(200).json({isAuth: true, login:candidate.login})
    }

  })
})

module.exports = router;
