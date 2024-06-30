const mongoose = require('mongoose');

const franchiseSchema = new mongoose.Schema({
  nameFr: { type: String, unique: true},  
  address: { type: String},
  cuisineType: {type: String},
  color: { type: String,unique:true},
  logo: {type: String},
  facebookLink: {type : String},
  twitterLink: {type : String},
  instagramLink: {type : String},
  tiktokLink: {type : String},
  phone: {type : String},
  email:{type : String,uniqueF:true},
  archive:{ type: Boolean, default: false },
  nbrF: { type: Number, default: 0 }, 
  nbrR: { type: Number, default: 0 }, 
  responsablefr : {type: mongoose.Schema.Types.ObjectId,ref: 'user'}, 
  menu: {type: mongoose.Schema.Types.ObjectId,ref: 'Menu' },
});

module.exports = mongoose.model('Franchise', franchiseSchema);
