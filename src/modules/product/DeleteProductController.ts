import { Request, Response } from "express";

import { prisma } from "../../lib/prisma";

export class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const productExists = await prisma.product.findFirst({
      where: { id: product_id },
    });

    if (!productExists) {
      return response.status(400).json({ message: "Producto não encontrado." });
    }

    await prisma.product.delete({
      where: { id: product_id },
    });

    return response
      .status(200)
      .json({ message: "Produto deletado com sucesso." });
  }
}
