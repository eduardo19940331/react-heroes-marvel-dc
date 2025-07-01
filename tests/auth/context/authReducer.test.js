import { use } from "react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    const initialState = {
        logged: false
    };

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer(initialState, []);
        expect(state).toEqual(initialState);

    });

    test('Debe de llamar al login autenticar y establecer el user', () => {
        const user = 'Eduardo Sanchez';
        const action = { type: types.login, payload: user };

        const state = authReducer(initialState, action);

        const expectState = {
            user: user,
            logged: true
        };

        expect(state).toEqual(expectState);
    });

    test('Debe de deslogear, borrar el name del usuario y logged en false', () => {
        const action = { type: types.logout };
        const user = 'Eduardo Sanchez';
        const initialState = { user: user, logged: true };

        const state = authReducer(initialState, action);

        expect(state.user).toBeUndefined();
        expect(state.logged).toBeFalsy();
        // OR
        expect(state).toEqual({ logged: false });
    });
})
