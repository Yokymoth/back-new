const db = require("../models/index");
const Recipetag = db.recipe_foodtag;

exports.selectFoodTag = (req, res) => {
    for (i = 0; i < req.body.length; i++) {
      console.log(req.body[i]);
      Recipetag.create({
        tagID : req.params[i].tagID,
      })
        .then(() => { 
          
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }
    res.send({ message: "select tag successfully!" });
  };