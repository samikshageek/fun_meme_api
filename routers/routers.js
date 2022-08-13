const express  = require('express');
const res = require('express/lib/response');
const { findById} = require('../datamodel/memeModel');

const router = express.Router();

router.get('/',  async(req, res) =>{
  const allMemes = require('../datamodel/memeModel')  ;
  //res.send("Rest api deployment successful");
  try{
      const memes = await allMemes.find();
      res.json(memes);
    }
  catch(error){
      console.log("Error occured, sorry for inconvenience . Please try again");
  }
})

router.get('/allTemplates', async(req , res ) => {
  const templateNameModel = require('../datamodel/templateModel');

  try{
    const data = await templateNameModel.find();
    res.json(data);
  }
  catch(error){
    let message={
      error:"Oops !!! Something Went Wrong"
    }
    res.json(message);
  }
})

router.post('/addTemplates' , async(req, res) =>{
  const templateNameModel = require('../datamodel/templateModel');

  try{
    let templateNameObj = new templateNameModel({
      templateName : req.body.templateName ,
      url : req.body.url
    })
    const data = await templateNameObj.save();
    res.json(data);
  }
  catch(error){
    let message={ error : "Please Try again "} ;

    res.json(message);
  }
})

router.post('/', async(req,res) =>{
    const meme = require('../datamodel/memeModel');

    console.log("req",req.body);

    const memeObj= new meme({
        memeType : req.body.memeType,
        url :req.body.url
    });
    const m1 = await memeObj.save();
    res.json(m1);


});


router.post('/trending', async(req, res) =>{
  console.log("Trending section");
  const allMemes = require('../datamodel/memeModel');
  
  try{
    const memes= await allMemes.find();
    const random = Math.floor(Math.random() * memes.length);
    res.send(memes[random]);
    
  }
  catch(error){
    //res.send(500).send("Error occured. Sorry for inconvenience ")
    next(error);
    console.log("Error occured. Sorry for inconvenience ");
  }
  
});


router.post('/memes/ExploreTemplate', async(req, res) => {
 
  console.log("req", req.body.memeType);
  const allMemes = require('../datamodel/memeModel');

  try{
    const memes = await allMemes.find();
    const result = memes.find(item => item.memeType === req.body.memeType);
    res.send(result);
  }
  catch(error){
    next(error);
  }

})

router.post('/memes/ExploreMemes',async(req,res) => {
  console.log("request", req.body.memeType);

  const allMemes= require('../datamodel/memeModel');
  const result =[];
  try{
    const memes =await allMemes.find();
    memes.map(item => {
      if(item.memeType === req.body.memeType){
        result.push(item);
        
      }
      
    })
    
    res.send(result);
  }
  catch(error){
    next(error);
  }
})
module.exports = router;