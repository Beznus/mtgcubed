const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var CardSchema = new Schema({
  name: String,
  names: [ String ],
  layout: String,
  manaCost: String,
  cmc: Number,
  colors: [ String ],
  colorIdentity: [ String ],
  type: String,
  supertypes: [ String ],
  types: [ String ],
  subtypes: [ String ],
  text: String,
  power: String,
  toughness: String,
  loyalty: Number,
  imageName: String
})

const Card = Mongoose.model("Card", CardSchema)
module.exports = { Card };
