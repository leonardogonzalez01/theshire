import {LIST_HEROES, ADD_HEROES} from "./const";

export const addHeroeAction = heroe =>
    dispatch => dispatch({type: ADD_HEROES, payload: heroe});

export const listHeroeAction = heroe =>
    dispatch => dispatch({type: LIST_HEROES, payload: heroe});