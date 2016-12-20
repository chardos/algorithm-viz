const binarySearch = (array, number, low = 0, high = array.length - 1) => {
    const mid = Math.floor(low + (high - low) / 2);
    if (number === array[mid]) return mid;
    if (low === high) return null;
    if (number < array[mid]) return binarySearch(array, number, low, mid - 1);
    if (number > array[mid]) return binarySearch(array, number, mid + 1, high);
}

export default binarySearch;

//binarySearch( [2,4,5,6,12,14,15,17,18], 2 );
