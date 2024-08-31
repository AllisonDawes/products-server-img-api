import { Request, Response } from "express";
import fs from "fs";
import path from "path";

import productImgConfig from "../../config/productImgConfig";

import { prisma } from "../../lib/prisma";

export class UpdateImageProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const productExists = await prisma.product.findFirst({
      where: { id: product_id },
    });

    if (!productExists) {
      return response.status(200).json({ message: "Produto não encontrado." });
    }

    if (productExists.product_image) {
      const productImageFilePath = path.join(
        productImgConfig.directory,
        productExists.product_image
      );

      const productImageFileExists = await fs.promises.stat(
        productImageFilePath
      );

      if (productImageFileExists) {
        await fs.promises.unlink(productImageFilePath);
      }
    }

    const product = await prisma.product.update({
      where: { id: product_id },
      data: {
        product_image: request.file.filename,
      },
    });

    return response.status(200).json(product);
  }
}
