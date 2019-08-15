/* GET Homepage */

const index = (req, res) => {
  res.render('index', { title: 'loc8r, the app' });
};

module.exports = {
  index
};