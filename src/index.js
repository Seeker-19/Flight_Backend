const express = require("express");
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");

config({
  path: "../.env",
});

const setUpServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setUpServer();
