const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  nameRes: { type: String},  
  address: { type: String},
  cuisineType: {type: String},
  taxeTPS: { type: String},
  taxeTVQ: { type: String},
  color: { type: String},
  logo: {type: String},
  images: {type:String},
  promotion: {type: String},
  payCashMethod: {type : String},
  payCartMethod: {type : String},
  longitude:  {type : Number},
  latitude: {type : Number},
  facebookLink: {type : String},
  twitterLink: {type : String},
  instagramLink: {type : String},
  tiktokLink: {type : String},
  phone: {type : String},
  email:{type : String, unique: true},
  archive:{ type: Boolean, default: false },
  payMethod:{type : String},

  taxe: { type: String, required: false, ref: 'Taxe' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  table : {type: mongoose.Schema.Types.ObjectId,ref: 'Table'},
  menu: {type: mongoose.Schema.Types.ObjectId,ref: 'Menu' },
  franchiseFK : {type: mongoose.Schema.Types.ObjectId,ref: 'Franchise'},
//  categories: [{type: mongoose.Schema.Types.ObjectId,ref: 'Category',}],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);