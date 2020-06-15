// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const morgan = require('morgan');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const port = 3000;

  const server = express();
  
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended:true}));
  server.use(morgan('dev'));
  server.use(cors());

  server.use('/', router);
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  
  // server.get('/products', (req, res) => {
  //   res.status(200).send('This is your get request, modify this file to use your router!')
  // })
  
  // server.post('/products', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })
  
  // server.put('/products/:id', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })
  
  // server.delete('/products/:id', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })

  server.listen(port, () => console.log('Connected to port: 3000'))