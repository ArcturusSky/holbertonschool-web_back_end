export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
} // Just used the method "every" to check on every element if in the set.
