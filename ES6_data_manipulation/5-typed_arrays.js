export default function createInt8TypedArray(length, position, value) {

    // create the array buffer of 8 bytes
    const buffer = new ArrayBuffer(length);

    // Create a 8 bit signes integer view on the buffer
    const int8View = new Int8Array(buffer);

    // Set values in the type array
    int8View[position] = value;
    if (!int8View[position] === value)
        throw Error('Position outside range')
}
