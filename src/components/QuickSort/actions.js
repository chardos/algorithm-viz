import { SET_POINTERS, SWAP } from './constants';

export function setPointers(leftIndex, rightIndex, pivotIndex){
    return {
        type: SET_POINTERS,
        payload: {
            selected: [leftIndex, rightIndex],
            pivotIndex
        }

    }
}

export function updateSwapState(leftIndex, rightIndex, items){
    return {
        type: SWAP,
        payload: {
            swapped: [leftIndex, rightIndex],
            items
        }
    }
}
