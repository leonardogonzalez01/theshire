import {LIST_MUNDOS, ADD_MUNDOS} from "./const";

export const addMundoAction = heroe =>
    dispatch => dispatch({type: ADD_MUNDOS, payload: heroe});

export const listMundoAction = heroe =>
    dispatch => dispatch({type: LIST_MUNDOS, payload: heroe});

