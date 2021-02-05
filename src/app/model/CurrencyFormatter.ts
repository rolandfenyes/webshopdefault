// tslint:disable-next-line:typedef
export function recalculatePrice(amount: number, priceInHUF) {
  const totalPrice = amount * priceInHUF;
  // tslint:disable-next-line:prefer-const
  let formatter = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    minimumFractionDigits: 0,
  });
  return formatter.format(totalPrice);
}
