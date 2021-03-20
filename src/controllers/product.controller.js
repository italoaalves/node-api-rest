import { ecommerce } from "../models";
const Product = ecommerce.models.product;

export async function getProduct(req, res) {
  const { id } = req.params;

  const product = await Product.findOne({
    where: {
      id,
    },
  });

  if (!product) {
    return res.status(400).send({
      message: `No product found with the id ${id}`,
    });
  }

  return res.send(product);
}
