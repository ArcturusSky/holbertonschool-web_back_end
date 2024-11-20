export default function updateUniqueItems(ListOfGroceries) {
  if (!(ListOfGroceries instanceof Map)) throw new Error('Cannot process');

  ListOfGroceries.forEach((value, key) => {
    if (value === 1) {
      ListOfGroceries.set(key, 100);
    }
  });
}
