import { setPointers } from './actions';

function swap(items, firstIndex, secondIndex){
    let newItems = [...items];
    newItems[firstIndex] = items[secondIndex];
    newItems[secondIndex] = items[firstIndex];
    return newItems;
}

function* partition(items, leftIndex, rightIndex) {

    var pivot = items[Math.floor((rightIndex + leftIndex) / 2)];

    while (leftIndex <= rightIndex) {
        while (items[leftIndex] < pivot) {
            leftIndex++;
            yield setPointers(leftIndex, rightIndex);
        }

        while (items[rightIndex] > pivot) {
            rightIndex--;
            yield setPointers(leftIndex, rightIndex);
        }

        if (leftIndex <= rightIndex) {
            // yield {
            //     type: 'ANIMATE_SWAP',
            //     payload: [leftIndex, rightIndex]
            // }
            items = swap(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return {leftIndex, items};
}

export default function* quickSortGenerator(items, leftIndex = 0, rightIndex = items.length - 1) {

    var index;

    yield setPointers(leftIndex, rightIndex);

    if (items.length > 1) {

        // index = partition(items, leftIndex, rightIndex);
        const partitionResult = yield* partition(items, leftIndex, rightIndex);
        index = partitionResult.leftIndex;
        items = partitionResult.items;

        if (leftIndex < index - 1) {
            return yield* quickSortGenerator(items, leftIndex, index - 1);
        }

        if (index < rightIndex) {
            return yield* quickSortGenerator(items, index, rightIndex);
        }

    }

    return items;
}

// first call
// quickSort([5,3,7,14,6,4,9,12]);
