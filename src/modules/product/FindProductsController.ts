import { Request, Response } from "express";

import { prisma } from "../../lib/prisma";

import { addProductImageUrl, Products } from "../../utils/addProductImageUrl";

export class FindProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findProducts: Products[] = await prisma.product.findMany({
      orderBy: { name_product: "asc" },
    });

    const products = addProductImageUrl(findProducts);

    return response.status(200).json(products);
  }
}
