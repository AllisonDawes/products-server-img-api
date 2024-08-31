import "dotenv/config";
import express, { Request, Response } from "express";

import { routes } from "./routes";
import productImgConfig from "./config/productImgConfig";

const server = express();

server.use(express.json());
server.use(routes);
server.use("/images", express.static(productImgConfig.directory));

server.get("/test", (request: Request, response: Response) => {
  return response.status(200).send("server online.");
});

server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
