const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}));

// Set the views directory and template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes for home, contact, and about pages
app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { pageTitle: 'Contact' });
});

app.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
});

app.get('/calculator', (req, res) => {
  console.log(req.query);
  let n1=parseInt(req.query.number_1);
  let n2=parseInt(req.query.number_2);
  sum=n1+n2;
  if(isNaN(sum)){
    sum=0;
  }
  
  console.log(sum);
  res.render('calculator', { pageTitle: 'Calculator',sum_get:sum,sum_post:0 });
});

app.post('/calculator', (req, res) => {
  let n1=parseInt(req.body.number_1);
  let n2=parseInt(req.body.number_2);
  let sum=n1+n2;
  res.render('calculator', { pageTitle: 'Calculator',sum_post: sum,sum_get:0 });
});  

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
