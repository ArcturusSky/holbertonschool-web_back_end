export default function cleanSet(set, startString) {
  // Convert into an array to allow modification

  if (startString === '') return '';

  const ArrayToModify = Array.from(set);

  // Filter words who start with "startstring"
  // Map the words and cut the first part
  const FilteredArray = ArrayToModify.filter((words) => words.startsWith(startString));
  const ArrayWithoutPrefix = FilteredArray.map((words) => words.slice(startString.length));

  // Convert the array into a string and join each word of the array by "-"
  const resultString = ArrayWithoutPrefix.join('-');
  return resultString;
}
