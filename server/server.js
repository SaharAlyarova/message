const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8000;
// dotenv.config();
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
 
  },
  { timestamps: true }
);
const Users = mongoose.model("message", userSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());
//GET ALL USERS
app.get("/message", (req, res) => {
  Users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
      //   res.json(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//GET USER BY ID
app.get("/message/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id, (err, doc) => {
    // if (!err) {
    //   res.send(doc);
    // } else {
    //   res.status(500).json({ message: err });
    // }

    if (!err) {
      if (doc) {
        res.send(doc);
        res.status(200);
      } else {
        res.status(404).json({ message: "NOT FOUND" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});
//DELETE USER BY ID
app.delete("/message/:id", (req, res) => {
  //   const id = req.params.id;
  const { id } = req.params;
  Users.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULLY DELETED");
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//POST NEW USER
app.post("/message/", (req, res) => {
  let user = new Users({
    name: req.body.name,
    message: req.body.message,
  });
  user.save();
  res.send({ message: "SUCCESS" });
});

//UPDATE USER DATA
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(req.body);
  //   console.log(id);
  Users.findByIdAndUpdate(id, req.body, (err, doc) => {
    console.log(doc);
    if (!err) {
      res.status(201);
    } else {
      res.status(500).json(err);
    }
  });
  res.send({ message: "SUCCESSFULLY UPDATED" });
});
// const PORT = process.env.PORT;
// const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);
mongoose.connect("mongodb+srv://sahar:sssaaa111@cluster0.opkcbok.mongodb.net/message", (err) => {
  if (!err) {
    console.log("DB CONNECTED");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }
})