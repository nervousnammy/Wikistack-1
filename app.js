const express = require('express');
const morgan = require('morgan');
const {main} = require('./views/index');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded());

app.get('/', (req,res,next) => {
  res.send(main());
})

app.listen('3000', () => console.log('App listening in port 3000'));
