import { Router } from "express";
import multer from "multer";

import productImgConfig from "../config/productImgConfig";
const upload = multer(productImgConfig);

import { FindProductsController } from "../modules/product/FindProductsController";
import { CreateProductController } from "../modules/product/CreateProductController";
import { UpdateImageProductController } from "../modules/product/UpdateImageProductController";
import { UpdateProductController } from "../modules/product/UpdateProductController";
import { DeleteProductController } from "../modules/product/DeleteProductController";

const productsRoutes = Router();

const findProductsController = new FindProductsController();
const createProductController = new CreateProductController();
const updateImageProductController = new UpdateImageProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productsRoutes.get("/", findProductsController.handle);
productsRoutes.post("/", createProductController.handle);
productsRoutes.put("/:product_id", updateProductController.handle);
productsRoutes.delete("/:product_id", deleteProductController.handle);

productsRoutes.patch(
  "/:product_id",
  upload.single("product_img"),
  updateImageProductController.handle
);

export { productsRoutes };
