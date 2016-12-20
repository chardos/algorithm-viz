const binarySearch = (array, number, low = 0, high = array.length - 1) => {
    const mid = Math.floor(low + (high - low) / 2);
    if (number === array[mid]) return mid;
    if (low === high) return null;
    if (number < array[mid]) return binarySearch(array, number, low, mid - 1);
    if (number > array[mid]) return binarySearch(array, number, mid + 1, high);
}

export default function* binarySearchGenerator(array, number, low = 0, high = array.length - 1){
    const mid = Math.floor(low + (high - low) / 2);
    yield {
        type: 'select',
        value: mid
    };
    if (number === array[mid]) yield {type: 'found', value: mid};
    if (low === high) return null;
    if (number < array[mid]){
        yield { type: 'not_found', value: mid};
        yield { type: 'update_active', value: range(low, mid - 1) };
        yield* binarySearchGenerator(array, number, low, mid - 1)
    };
    if (number > array[mid]){
        yield { type: 'not_found', value: mid};
        yield { type: 'update_active', value: range(mid + 1, high) };
        yield* binarySearchGenerator(array, number, mid + 1, high);
    }
}
var b = binarySearchGenerator([2,4,5,6,12,14,15,17,18], 2)


let range = (num1, num2, arr = [num2]) => {
    if (num1 === num2) return arr;
    return range(num1, num2 - 1, [num2 - 1, ...arr])
}

//NYAN GENERATOR
function* range(start, end, step = 1, current = start) {
   yield current;
   if (current < end) yield* range(start, end, step, current + step);
}

//binarySearch( [2,4,5,6,12,14,15,17,18], 2 );
