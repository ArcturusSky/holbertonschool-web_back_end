export default function concatArrays(array1, array2, string) {
  const merged = [...array1, ...array2, ...string];
  return merged;
}
