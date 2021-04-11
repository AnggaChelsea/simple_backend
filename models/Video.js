const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  title:{
    type:String,
  },
  gambar: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  comment:{
    type:Number
  },
  deskripsisingkat: {
    type: String,
    required: true
  },
  published: {
    type:Date,
    default: Date.now(),
  },
});

const Video = mongoose.model('Video', VideoSchema);
module.exports = Video;

