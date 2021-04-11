const VideoModel = require('../models/Video');
 
class VideoController {
  static post(req, res) {
    const {
      name,
      title,
      gambar,
      deskripsi,
      icon,
      views,
      comment,
      deskripsisingkat
    } = req.body;
    const video = new VideoModel({
        name,
        title,
        gambar,
        deskripsi,
        icon,
        views,
        comment,
        deskripsisingkat
    })
     video
    .save()
    .then((video) =>{
      res.status(201).json({message:'succes video added successfully', data: video});
    })
    .catch(err => {
        res.status(201).json({message:'erro', err});
    })
  }

 
  static getId(req, res, next) {
    VideoModel.findOne({
        _id: req.params.id
      })
      .then((video) => {
        res.status(200).json({
          success: true,
          data: video
        })
      })
      .catch(err => {
        res.status(500).send({message:err})
      });
  }



  static getall(req, res){
    VideoModel.find()
    .then((video)=>{
      res.status(200).json({message:'ok', data:video})
    })
    .catch(err => {
      res.status(500).send({message:'err', err})
    })
  }

  static del(req,res){
    
  }

}

module.exports = VideoController;
