import { useReducer } from "react";
import positionReducer from "./positionReducer";
import positionContext from "./positionContext";
import {
    PUT_POSITION
} from '../../types';
const addState = (props) => {
    const initialState = {
        position: [],
    };
    const [state, dispatch] = useReducer(positionReducer, initialState);
    const putPosition = (position) => {
        dispatch({
            type: PUT_POSITION,
            payload: position
        });
    }
    const getPositions = () => {
        return state.position;
    }
    return (
        <positionContext.Provider
            value={{
                position: state.position,
                putPosition,
                getPositions
            }}
        >
            {props.children}
        </positionContext.Provider>
    );
}
export default addState;
