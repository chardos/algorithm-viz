import { randomizeArray, range } from '../../utils';

function isArraySorted(array){
    const [head, ...tail] = array;
    if(array.length == 1){
        return true;
    }
    if(array[0] < array[1]){
        return isArraySorted(tail);
    }
    else {
        return false;
    }
}

export default function* bogoSortGenerator (array) {
    yield {
        action: 'UPDATE_LIST',
        payload: array
    };
    const arrayIsSorted = isArraySorted(array);
    if(arrayIsSorted) return array;
    yield* bogoSortGenerator(randomizeArray(array));
}
