const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const blogData = require("../modules/model")


const connectDB = async () =>{
    try{
        const con = await mongoose.connect("mongodb+srv://om:pharate11@cluster0.nnceu.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected")
    }catch(err){
        console.log(err)
    }
}
connectDB();





router.get('/add',(req,res)=>{
    res.render("addblog")
})

router.post('/addblog',(req,res)=>{

    
  const bd = new blogData({
        Date:Date.now(),
        title:req.body.title,
        text:req.body.text,

    })

    bd.save(bd).then((data)=>{
        res.redirect("/")
    }).catch((err)=>{
        res.send(err)
    })
    
 })

 
router.get('/',(req,res)=>{
    blogData.find().then((data)=>{
        res.render("index",{data:data})
    })  
   
})
router.get('/blogpost/:title',(req,res)=>{
        let string = req.params.title
       blogData.find({title:string}).then((data)=>{
           res.render("blogpage",{data:data})
       })
    
   
})
router.get('/delete/:id',(req,res)=>{
        let id = req.params.id
       blogData.deleteOne({id:id}).then(()=>{

           res.redirect("/")
       })
    
   
})



module.exports = router
