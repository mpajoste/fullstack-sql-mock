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

  postProductsHelper: (body, callback) => {
    // db.query(`INSERT INTO products `)
  },

  updateProductHelper: (body, params, callback) => {
    console.log(body)
    db.query(`UPDATE products SET curr_bid=${body.bid} WHERE id=${params.id};`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback (null, result)
      }
    })
  },

  deleteProductHelper: () => {

  }
};

module.exports = dbHelpers;