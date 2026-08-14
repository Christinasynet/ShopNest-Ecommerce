import api from "./api";

export const createOrder = async (
  cartItems,
  totalPrice,
  address,
  paymentId
) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const items = cartItems.map((item) => ({
    product: item._id,
    qty: item.qty,
    price: item.price,
  }));

  const { data } = await api.post(
    "/orders",
    {
      items,
      totalPrice,
      address,
      paymentId,
    },
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
  );

  return data;
};

export const getMyOrders = async () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const { data } = await api.get("/orders/myorders", {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  });

  return data;
};