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
      res.status(500).json({
        success: false,
        error: error
      });
    });
  }
};

module.exports = json;
