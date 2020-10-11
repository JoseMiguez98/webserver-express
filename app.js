const express = require('express')
const app = express();
const hbs = require('hbs');

const port =  process.env.PORT || 3000;

require('./helpers');

// File serve
app.use(express.static(`${__dirname}/public`));

hbs.registerPartials(`${__dirname}/partials`);
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  res.render('home', { name: 'joseph' });
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(port, () => console.log(`Listening on port ${ port }...`));

// JSON response
// app.get('/', (req, res) => {
//   let salida = {
//     response: 'acid trip'
//   };

//   res.send(salida);
// })