// Controller here
// complete building out the controller
const dbHelpers = require('../db/dbhelpers.js');

const controller = {

  get: (req, res) => {
    dbHelpers.getProductsHelper ((err, result) => {
      if (err) {
        res.status(400).send('Could Not Get Data')
      } else {
        res.status(200).send(result)
      }
    })
  },
  post: (req, res) => {
    dbHelpers.postProductsHelper(req.body, (err, result) => {
      if (err) {
        res.status(401).send('Error in Post')
      } else {
        res.status(201).send('Post Successful')
      }
    })
  },
  put: (req, res) => {
    dbHelpers.updateProductHelper(req.body, req.params, (err, result) => {
      if (err) {
        res.status(402).send('error in update')
      } else {
        res.status(202).send('Successful Update')
      }
    })
  },
  delete: (req, res) => {}
}

module.exports = controller;