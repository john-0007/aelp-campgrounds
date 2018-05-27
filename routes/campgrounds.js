var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var middleware=require("../middleware");

router.get("/",function(req,res){
   var campground=Campground.find({},function(err,campgrounds){
       if(err){
           console.log(err);   
       }else{
           res.render("campgrounds/index",{campgrounds:campgrounds});
       }
   });
     
});
// INDEX - show all campsground
router.post("/",middleware.isLoggedIn,function(req,res){
      var name=req.body.name;
      var image=req.body.image;
      var price=req.body.price;
      var desc=req.body.description;
      var author={
          id:req.user._id,
          username:req.user.username
      }
      var campground={
          name:name,
          image:image,
          price:price,
          description:desc,
          author:author
      }
// CREATE - add new campground to database
    Campground.create(campground,function(err,campground){
        if(err){
            console.log(err)
        }else{
           res.redirect("campgrounds"); 
        }
    });
      
      
       
});
// NEW- show form to create new campground
router.get("/new",middleware.isLoggedIn,function(req, res) {
    res.render("campgrounds/new"); 
});

// SHOW - show more info abot campground
router.get("/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundcampground){
        if(err){
            
        }else{
           console.log(foundcampground);
           res.render("campgrounds/show",{campground:foundcampground});
        }
    });
    
});

router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req, res) {
  
     Campground.findById(req.params.id,function(err,foundCampground){
                res.render("edit",{campground:foundCampground});
   });
});

router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updateCampground){
       if(err){
           res.redirect("/campgrounds");
       } else{
           res.redirect("/campgrounds/"+req.params.id);
       }
    });
});

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
    
});

module.exports=router;