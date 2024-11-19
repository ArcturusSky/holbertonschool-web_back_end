export default function createInt8TypedArray(length, position, value) {

    if (value > length) {
        throw Error('Position outside range')
    }
    return ArrayBuffer(position)
}