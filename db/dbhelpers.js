// complete and fix the dbhelpers
const db = require('./index.js');


const dbHelpers = {
  getProductsHelper: (callback) => {
    db.query('SELECT * FROM products;', (err, result) => {
      if(err) {
        callback(err)
      } else {
        callback(null, result);
      }
    })
  },

  postProductsHelper: () => {

  },

  updateProductHelper: () => {

  },

  deleteProductHelper: () => {

  }
};

module.exports = dbHelpers;