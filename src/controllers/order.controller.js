import { ecommerce } from "../models";
const Order = ecommerce.models.order;

export async function getOrder(req, res) {
  const { id } = req.params;

  const order = await Order.findOne({
    where: {
      id,
    },
  });

  if (!order) {
    return res.status(400).send({
      message: `No order found with the id ${id}`,
    });
  }

  return res.send(order);
}
