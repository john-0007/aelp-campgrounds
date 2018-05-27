var express=require("express"),
    app=express(),
    bodyParser=require("body-parser"),
    mongoose=require("mongoose"),
    flash   =require("connect-flash"),
    passport=require("passport"),
    LocalStrategy=require("passport-local"),
    methodOverride=require("method-override"),
    seedDb=require("./seeds"),
    Comment=require("./models/comment"),   
    User=require("./models/user"),
    Campground=require("./models/campground");
    
var commentRoutes    =require("./routes/comments"),
    campgroundRoutes =require("./routes/campgrounds"),  
    indexRoutes      =require("./routes/index");  

// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://johny:johny@ds041140.mlab.com:41140/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));    
app.set("view engine" , "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDb();
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"I'm a greate developer",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
   res.locals.currentUser=req.user;
   res.locals.error=req.flash("error");
   res.locals.success=req.flash("success");
   next();
});





app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);







app.listen(process.env.PORT,process.env.IP,function(){
    console.log("app has started!");
})