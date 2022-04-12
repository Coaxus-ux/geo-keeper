import {
    PUT_POSITION
} from '../../types';
export default function (state, action) {
    switch (action.type) {
        case PUT_POSITION:
            return {
                ...state,
                position: [...state.position, action.payload]
            };
        default:
            return state;
    }
}