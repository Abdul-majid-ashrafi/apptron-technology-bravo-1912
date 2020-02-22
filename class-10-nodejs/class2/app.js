const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// application
const PostModel = require('./schemas/post');
const uri = "mongodb+srv://application:application@cluster0-vozg9.mongodb.net/Apptron";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.use(bodyParser.json());

// create post
app.post("/create", (request, response) => {
    const { title, description, auther } = request.body;
    if (title && description && auther) {
        new PostModel({ title: title, description: description, auther: auther, timestamp: Date.now() })
            .save((error, doc) => {
                if (error) {
                    response.send(error);
                } else {
                    response.send({ message: "Post has been created successfully", status: 200 });
                }
            })
    } else {
        response.send("Required Fields Are Missing")
    }
})

// get all post
app.get("/getAllPost", (request, response) => {
    // PostModel.find({}, (error, doc) => {
    PostModel.find({})
        .sort({ timestamp: -1 })
        .exec((error, doc) => {
            if (error) {
                response.send(error);
            } else {
                response.send(doc);
            }
        })
})

// get a post
app.get("/getPost", (request, response) => {
    PostModel.findOne({ auther: "Majid" }, (error, doc) => {
        if (error) {
            response.send(error);
        } else {
            response.send(doc);
        }
    })
})

// update document
app.post("/update", (request, response) => {
    const { title, description, id } = request.body;
    if (title && description && id) {
        PostModel.updateOne({ _id: id }, { title: title, description: description }, (error, doc) => {
            if (error) {
                response.send(error);
            } else {
                response.send({ message: "Post has been updated successfully", status: 200 });
            }
        })
    } else {
        response.send("Required Fields Are Missing")
    }
})

// delete a post
app.get("/delete", (request, response) => {
    const id = request.headers.id;
    if (id) {
        PostModel.deleteOne({ _id: id }, (error, doc) => {
            if (error) {
                response.send(error);
            } else {
                response.send("DELETEd");
            }
        })
    } else {
        response.send("Id is required");
    }
})


app.listen(port, () => console.log("server is running on localhost:" + port))


db.on('connected', function () {
    console.log("we're connected!")
});
// db.once('open', function () {
//     console.log("mongoose going to connect")
// });
db.on('error', console.error.bind(console, 'connection error:'));