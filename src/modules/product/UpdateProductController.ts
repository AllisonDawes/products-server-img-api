import { Request, Response } from "express";

import { prisma } from "../../lib/prisma";

export class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;
    const { name_product, description, price } = request.body;

    const product = await prisma.product.update({
      where: { id: product_id },
      data: {
        name_product,
        description,
        price: Number(price),
        updated_at: new Date(),
      },
    });

    return response.status(200).json(product);
  }
}
