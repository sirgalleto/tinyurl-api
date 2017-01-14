"use strict";

let json = {
  promise(q, res) {
    q
    .then((data)=> {
      res.json({
        success: true,
        data: data
      })
    })
    .catch((error) => {
      res.status(error.status || 500);

      res.json({
        success: false,
        error: error
      });
    });
  }
};

module.exports = json;
