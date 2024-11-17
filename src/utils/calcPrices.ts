export default function calcPrices(sessions: number, pricePerSession: number, discountAmount: number) {
  const regularPrice = sessions * pricePerSession;
  const yoursPrice = regularPrice / 2 + 10;
  const cutOff = (discountAmount / 100) * yoursPrice;
  const afterDiscount = yoursPrice - cutOff;
  const totalPrice = afterDiscount * 0.5;
  return {
    regularPrice,
    yoursPrice,
    afterDiscount,
    totalPrice,
  };
}
