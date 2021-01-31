# first of all init package.json file which will track all installed packages (change entry point to app.js)
npm init

# create .gitignore with following lines:

...
lines which will exclude node.js generated files (you can generate lines following by the link: https://www.toptal.com/developers/gitignore)
...

...
lines which will exclude vscode generated files (you can generate lines following by the link: https://www.toptal.com/developers/gitignore)
...

# install following packages
npm install --save express ejs body-parser
npm install --save-dev nodemon

# add to package.json new script which you will use to start development server (using nodemon)
"start": "nodemon app.js"

# create app.js file with following code:
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// seting engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// encoding body
app.use(bodyParser.urlencoded({ extended: false }));

// routing
app.use(express.static(path.join(__dirname, 'public')));

app.post('/add-product', (req, res) => {
  // code for adding new product to database
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

# create files and folders with following structure:
public
  // folder contain all static file (for example files created by webpack)
views
  // folder contain ejs files which server will render dependig on routes
  includes
    // folder contain ejs files which you will include in other ejs files (for example head.ejs, header.ejs, footer.ejs et cetera)

# to run server use following command: (to stop development server use "ctrl + c")
npm run start