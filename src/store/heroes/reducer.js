import { initialState } from "./initialState";
import {ADD_HEROES, LIST_HEROES} from "./const";

export default function reducer(state = initialState, action) {
    debugger;
    switch (action.type) {
        case LIST_HEROES: {
            return {
                ...state, heroes: state.heroes.concat(action.payload)

            };
        }
        case ADD_HEROES: {
            return {
                ...state,
                heroes: state.heroes.concat(action.payload)
            }
        }
        default: {
            return state;
        }
    }
};