import { setPointers } from './actions';
import { swap } from '../../utils';

function* partition(items, leftIndex, rightIndex) {

    var pivotIndex = Math.floor((rightIndex + leftIndex) / 2);
    var pivot = items[pivotIndex];

    yield setPointers(leftIndex, rightIndex, pivotIndex);

    while (leftIndex <= rightIndex) {
        while (items[leftIndex] < pivot) {
            leftIndex++;
            yield setPointers(leftIndex, rightIndex, pivotIndex);
        }

        while (items[rightIndex] > pivot) {
            rightIndex--;
            yield setPointers(leftIndex, rightIndex, pivotIndex);
        }

        if (leftIndex <= rightIndex) {
            items = swap(items, leftIndex, rightIndex);
            yield {
                type: 'ANIMATE_SWAP',
                payload: {
                    swapped: [leftIndex, rightIndex],
                    items
                }
            }
            leftIndex++;
            rightIndex--;
        }
    }

    return {leftIndex, items};
}

export default function* quickSortGenerator(items, leftIndex = 0, rightIndex = items.length - 1) {

    var index;

    if (items.length > 1) {

        // index = partition(items, leftIndex, rightIndex);
        const partitionResult = yield* partition(items, leftIndex, rightIndex);
        index = partitionResult.leftIndex;
        items = partitionResult.items;

        if (leftIndex < index - 1) {
            items = yield* quickSortGenerator(items, leftIndex, index - 1);
        }

        if (index < rightIndex) {
            items = yield* quickSortGenerator(items, index, rightIndex);
        }

    }
    console.log('DONE');
    return items;
}

// first call
// quickSort([5,3,7,14,6,4,9,12]);
