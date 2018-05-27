var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[   
    {
         name:"Cloud's Rest",
         image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde atque consectetur delectus assumenda aperiam et ab aut amet pariatur. Tempore sint autem ullam dolor delectus soluta quas similique distinctio asperiores earum cum est laboriosam consequuntur, perspiciatis beatae assumenda aspernatur reiciendis non nesciunt sed hic, officiis animi facilis? Eaque aliquid deleniti eligendi, doloremque consequatur, earum rem? Laudantium unde commodi veritatis rerum doloribus sapiente illo amet rem dolor, ex, consequatur dolore quia perspiciatis magni reprehenderit ullam optio sed dignissimos quasi facilis molestias!"
    },
    {
        name:"Desert Mesa",
        image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde atque consectetur delectus assumenda aperiam et ab aut amet pariatur. Tempore sint autem ullam dolor delectus soluta quas similique distinctio asperiores earum cum est laboriosam consequuntur, perspiciatis beatae assumenda aspernatur reiciendis non nesciunt sed hic, officiis animi facilis? Eaque aliquid deleniti eligendi, doloremque consequatur, earum rem? Laudantium unde commodi veritatis rerum doloribus sapiente illo amet rem dolor, ex, consequatur dolore quia perspiciatis magni reprehenderit ullam optio sed dignissimos quasi facilis molestias!"
     
    },
    {
        name:"Canyon Floor",
        image:"https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde atque consectetur delectus assumenda aperiam et ab aut amet pariatur. Tempore sint autem ullam dolor delectus soluta quas similique distinctio asperiores earum cum est laboriosam consequuntur, perspiciatis beatae assumenda aspernatur reiciendis non nesciunt sed hic, officiis animi facilis? Eaque aliquid deleniti eligendi, doloremque consequatur, earum rem? Laudantium unde commodi veritatis rerum doloribus sapiente illo amet rem dolor, ex, consequatur dolore quia perspiciatis magni reprehenderit ullam optio sed dignissimos quasi facilis molestias!"
    }
];

function seedDb(){
Campground.remove({},function(err){
   if(err){
       console.log(err);
   } 
//   console.log("Remove All the Campground");
//   // Create new campground
//         data.forEach(function(seed){
//             Campground.create(seed,function(err,campground){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log("New Campground added");
//                     Comment.create({
//                         text:"This place is great I wish there was internet",
//                         author:"Homer"
//                     },function(err,comment){
//                       if(err){
//                           console.log(err);
//                       }else{
//                             campground.comments.push(comment);
//                             campground.save();
//                             console.log("Created new comment");
//                       }
//                     })
//                 }
//             });
// });
});

}




module.exports=seedDb;