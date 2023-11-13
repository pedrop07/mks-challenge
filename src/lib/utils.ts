export function priceFormatter(number: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  });

  return formatter.format(number);
}
