const cookieParser = require("cookie-parser");
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 1017;
const useRouter = require("./routes/userRouter");
require("dotenv").config();

//todo : regular middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());

// call the router

app.use("/api", useRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hi there",
  });
});

app.listen(port, () => {
  console.log(`app listening of port ${port}`);
});
