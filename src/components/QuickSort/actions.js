export function setPointers(leftIndex, rightIndex, pivotIndex){
    return {
        type: 'SET_POINTERS',
        payload: {
            selected: [leftIndex, rightIndex],
            pivotIndex
        }

    }
}

// export function setPivot(index){
//     return {
//         type: 'SET_PIVOT',
//         payload: index
//     }
// }
