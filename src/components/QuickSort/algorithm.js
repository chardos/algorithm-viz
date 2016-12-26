function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function* partition(items, leftIndex, rightIndex) {

    var pivot   = items[Math.floor((rightIndex + leftIndex) / 2)];

    while (leftIndex <= rightIndex) {
        while (items[leftIndex] < pivot) {
            leftIndex++;
        }

        while (items[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return leftIndex;
}

export default function* quickSortGenerator(items, leftIndex = 0, rightIndex = items.length - 1) {

    var index;

    yield {
        type: 'SET_POINTERS',
        payload: [leftIndex, rightIndex]
    }

    if (items.length > 1) {

        // index = partition(items, leftIndex, rightIndex);
        index = yield* partition(items, leftIndex, rightIndex);

        if (leftIndex < index - 1) {
            yield* quickSortGenerator(items, leftIndex, index - 1);
        }

        if (index < rightIndex) {
            yield* quickSortGenerator(items, index, rightIndex);
        }

    }

    return items;
}

// first call
// quickSort([5,3,7,14,6,4,9,12]);
