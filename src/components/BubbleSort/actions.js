import { ANIMATE_SWAP, UPDATE_LIST, SELECT } from './constants';

export function animateSwap(position){
    console.log('swap', position);
    return {
        type: ANIMATE_SWAP,
        payload: position
    }
}

export function updateList(newList){
    return {
        type: UPDATE_LIST,
        payload: newList
    }
}

export function select(position){
    return {
        type: SELECT,
        payload: position
    }
}
