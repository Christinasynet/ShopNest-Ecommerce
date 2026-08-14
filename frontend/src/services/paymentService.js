import api from "./api";

export const createPaymentOrder = async (amount) => {
  const { data } = await api.post("/payments/order", {
    amount,
  });

  return data;
};

export const verifyPayment = async (paymentData) => {
  const { data } = await api.post(
    "/payments/verify",
    paymentData
  );

  return data;
};