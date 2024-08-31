import { Decimal } from "@prisma/client/runtime/library";

export type Products = {
  id: string;
  name_product: string;
  description: string;
  price: Decimal;
  product_image: string;
  created_at: Date;
  updated_at: Date;
};

export function addProductImageUrl(listProducts: Products[]) {
  const products = listProducts.map((listProduct) => {
    return {
      ...listProduct,
      product_image_url: listProduct.product_image
        ? `${process.env.IMAGE_URL}/images/${listProduct.product_image}`
        : null,
    };
  });

  return products;
}
