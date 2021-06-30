export const formattedPrice = (productPrice) => {
  return (
    "$" +
    productPrice.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};
