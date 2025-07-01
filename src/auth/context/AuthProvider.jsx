import { useReducer } from 'react';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { types } from '../types/types';

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false
    };

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        return {
            logged: !!user,
            user: user,
        }
    }

    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const onLogin = (name = '') => {
        const user = {
            id: 'ABC',
            name
        };

        const action = {
            type: types.login,
            payload: {
                id: 123,
                name: name,
            }
        };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    };

    const onLogout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        };

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            // Methods
            login: onLogin,
            logout: onLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
