import {
    SELECT,
    NOT_FOUND,
    FOUND,
    UPDATE_ACTIVE
} from './constants';

function select(midpoint){
    return {
        type: SELECT,
        payload: midpoint
    }
}

function found(midpoint){
    return {
        type: FOUND,
        payload: midpoint
    }
}

function notFound(midpoint){
    return {
        type: NOT_FOUND,
        payload: midpoint
    }
}

function updateActive(newActivesArray){
    return {
        type: UPDATE_ACTIVE,
        payload: newActivesArray
    }
}

export {
    select,
    found,
    notFound,
    updateActive
}
