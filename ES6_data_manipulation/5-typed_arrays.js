export default function createInt8TypedArray(length, position, value) {
  // Check if position is position is within the buffer's size
  if (position < 0 || position >= length) throw Error('Position outside range');

  // create the array buffer of 8 bytes
  const buffer = new ArrayBuffer(length);

  // Create a "view" to be able to access inner data of the buffer
  const view = new DataView(buffer);

  // Assigned value into the given position.
  view.setInt8(position, value);
  return view;
}
