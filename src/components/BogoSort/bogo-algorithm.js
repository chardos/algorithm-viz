function isArraySorted(array){
    const [head, ...tail] = array;
    if(array.length == 1){
        return true;
    }
    if(array[0] < array[1]){
        return isArraySorted(tail);
    }
    else {
        return false;
    }
}

function bogoSort (array) {
    // if()
}

// bubbleSortGenerator([8,6,3,7,9,4]);
