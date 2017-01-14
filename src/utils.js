// @flow

/**
 * Swap - takes an array, and 2 indexes, and swaps them.
 * @param {array} items - the array
 * @param {number} firstIndex - first index to swap
 * @param {number} secondIndex - second index to swap
 * @return {array} the swapped array
 */
function swap(items: [], firstIndex: number, secondIndex: number) : []{
    let newItems = [...items];
    newItems[firstIndex] = items[secondIndex];
    newItems[secondIndex] = items[firstIndex];
    return newItems;
}

function isEscapeKey(keyCode: number): boolean {
    return keyCode === 27;
}

/**
 * randomizeArray - takes an array, returns an array with the original arrays
 * values shuffled. Uses the Fisher Yates algorithm.
 * @param {array} array - the array e.g. [1,2,3,4,5,6]
 * @return {array} the shuffled array e.g. [3,2,6,4,5,1]
 */
function randomizeArray(array: [], currentIndex: number = array.length - 1) : []{
    if(currentIndex == 0) return array;

    // Get a random index
    const randomIndex = Math.floor(Math.random() * currentIndex);

    // Swap it with current index
    array = swap(array, currentIndex, randomIndex);

    return randomizeArray(array, currentIndex - 1);
}

/**
 * Based on 2 numbers, will return an array starting ranging in numbers from the
 * start to the end.
 * @param {number} start - start value e.g. 2
 * @param {number} end - last value e.g. 5
 * @return {array} the range array e.g. [2,3,4,5]
 */
function range(start: number, end: number, arr: [] = [end]) : [] {
    if (start === end) return arr;
    return range(start, end - 1, [end - 1, ...arr])
}

export {
    swap,
    isEscapeKey,
    randomizeArray,
    range
}
