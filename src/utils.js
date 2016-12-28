export function swap(items, firstIndex, secondIndex){
    let newItems = [...items];
    newItems[firstIndex] = items[secondIndex];
    newItems[secondIndex] = items[firstIndex];
    return newItems;
}


// Fisher yates shuffle
export function randomizeArray(array, currentIndex = array.length - 1){
    if(currentIndex == 0) return array;

    // Get a random index
    const randomIndex = Math.floor(Math.random() * currentIndex);

    // Swap it with current index
    array = swap(array, currentIndex, randomIndex);

    return randomizeArray(array, currentIndex - 1);
}


export function range(start, end, arr = [end]) {
    if (start === end) return arr;
    return range(start, end - 1, [end - 1, ...arr])
}
