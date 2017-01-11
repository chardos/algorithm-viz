import {
    select,
    found,
    notFound,
    updateActive
} from './actions';

let range = (num1, num2, arr = [num2]) => {
    if (num1 === num2) return arr;
    return range(num1, num2 - 1, [num2 - 1, ...arr])
}

export default function* binarySearchGenerator(array, number, low = 0, high = array.length - 1){
    const midpoint = Math.floor(low + (high - low) / 2);
    yield select(midpoint)
    if (number === array[midpoint]) yield found(midpoint);
    if (low === high) return null;
    if (number < array[midpoint]){
        yield notFound(midpoint);
        yield updateActive(range(low, midpoint - 1));
        yield* binarySearchGenerator(array, number, low, midpoint - 1)
    };
    if (number > array[midpoint]){
        yield notFound(midpoint);
        yield updateActive(range(midpoint + 1, high));
        yield* binarySearchGenerator(array, number, midpoint + 1, high);
    }
}
