import { createAction } from 'typesafe-actions';

export const toggleCart = createAction('TOGGLE_CART')()

export const addCart = createAction('ADD_TO_CART', (item: string) => ({
    type: 'ADD_TO_CART',
    payload: item,
}));



