const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

// BlogPost.create({
//     title: "Man must explore, and this is exploration at its greatest",
//     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consecteturLorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!"},
//     (error, blogpost) =>{
//         console.log(error, blogpost)
// })

// BlogPost.find({}, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// BlogPost.find({
//     title:"The Mythbuster's patrick"
// }, (error, blogspot)=>{
//     console.log(error, blogspot)
// })

var id = "6289d421a90464ee71df640a";

BlogPost.findById(id, (error, blogspot) => {
    console.log(error, blogspot)
})

BlogPost.findByIdAndUpdate(id, {
    title:'Update title'
}, (error, blogspot) => {
    console.log(error, blogspot)
})