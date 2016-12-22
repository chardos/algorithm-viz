const swap = (list, position) => {
    // if swapped, return array, if not, return nothing.
    if(list[position] > list[position + 1]){
        return [
            ...list.slice(0, position),
            list[position + 1],
            list[position],
            ...list.slice(position + 2)
        ]
    }
}

export default function* bubbleSortGenerator (list, position = 0, swapCounter = 0) {
    if(position + 1 == list.length){ // End of sort round
        if(swapCounter == 0) return list; // If got through round without any swaps
        position = 0;
        swapCounter = 0;
    }
    yield {
        type: 'select',
        value: position
    };
    const newList = swap(list, position);
    if (newList){
        yield {
            type: 'animate_swap',
            value: position
        }
        yield {
            type: 'update_list',
            value: newList
        }
        yield* bubbleSortGenerator(newList, position + 1, swapCounter + 1);
    }
    else{
        yield* bubbleSortGenerator(list, position + 1, swapCounter);
    }

}

// bubbleSortGenerator([8,6,3,7,9,4]);
