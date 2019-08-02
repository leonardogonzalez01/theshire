import { initialState } from "./initialState";
import {LIST_HEROES} from "./const";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LIST_HEROES: {
            return {
                ...state, heroes: state.heroes.concat(action.payload)

            };
        }
        default: {
            return state;
        }
    }
};