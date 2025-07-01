import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import PrivateRoute from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute />', () => {
    test('Debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contexValue = {
            user: {
                id: 123,
                name: 'User Test',
            },
            logged: true,
        };

        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();

        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
    });
})
