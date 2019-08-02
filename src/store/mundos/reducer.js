import { initialState } from "./initialState";
import {ADD_MUNDOS, LIST_MUNDOS} from "./const";

export default function reducer(state = initialState, action) {
    debugger;
    switch (action.type) {
        case LIST_MUNDOS: {
            return {
                ...state, mundos: state.mundos.concat(action.payload)

            };
        }
        case ADD_MUNDOS: {
            return {
                ...state,
                mundos: state.mundos.concat(action.payload)
            }
        }
        default: {
            return state;
        }
    }
};