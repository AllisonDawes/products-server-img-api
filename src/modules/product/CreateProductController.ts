import { Request, Response } from "express";

import { prisma } from "../../lib/prisma";

export class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name_product, description, price } = request.body;

    const product = await prisma.product.create({
      data: {
        name_product,
        description,
        price: Number(price),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return response.status(201).json(product);
  }
}
