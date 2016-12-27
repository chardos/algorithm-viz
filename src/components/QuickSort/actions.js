export function setPointers(leftIndex, rightIndex){
    return {
        type: 'SET_POINTERS',
        payload: [leftIndex, rightIndex]
    }
}
