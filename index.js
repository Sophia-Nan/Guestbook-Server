const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

//mongoose

mongoose.connect(
  "mongodb+srv://Sophia:ro4qWuwFZBqmWdPQ@cluster0.gb3kh.mongodb.net/users?retryWrites=true&w=majority",
  {
      useNewUrlParser: true,
  }
);

// mongoose.connect(
//   process.env.MONGODB_CONNECTION_STRING,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },
//   (err) => {
//     if (err) throw err;
//     console.log("MongoDB connection established");
//   }
// );

//routes

app.use("/users", require("./routes/userRouter"));
