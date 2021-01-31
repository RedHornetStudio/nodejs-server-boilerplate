const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;
products = [];

// seting engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// encoding body
app.use(bodyParser.urlencoded({ extended: false }));

// routing
app.use(express.static(path.join(__dirname, 'public')));

app.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect('/');
});

app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404'
  });
});

// start app
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});