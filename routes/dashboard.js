var express = require('express');
var router = express.Router();
const DASHBOARD = 'dashboard';
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  console.log(req.session.username)
  if (req.path === '/login')
  next();
  if (req.session.username === 'tratanhieu97@gmail.com')
  next();
  else
  res.redirect(`/${DASHBOARD}/login`);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(`${DASHBOARD}/index`, { title: 'Dashboard Express' });
});
router.get('/login', function(req, res, next) {
  res.render(`${DASHBOARD}/login`, { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  console.log(req.param('username'));
  req.session.username = req.param('username');
  res.redirect(`${DASHBOARD}`);
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render(`${DASHBOARD}/index`, { title: 'Login Successfully', username: req.param('username'), password: req.param('password') });
});

module.exports = router;
