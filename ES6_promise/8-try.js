export default function divideFunction(numerator, denominator) {
  // Just cutting because it's ugly
  if (denominator === 0) throw new Error('cannot divide by 0');
  else return (numerator / denominator);
}
