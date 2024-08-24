import express from "express";

import { config } from "dotenv";
import cookieParser from "cookie-parser";

config({
  path: "../.env",
});

const setUpServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  const PORT = process.env.PORT;

  app.listen(PORT, (c) => {
    console.log(`Serve started at ${PORT}`);
  });
};

setUpServer();
