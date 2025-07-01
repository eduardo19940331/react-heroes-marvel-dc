import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import PublicRoute from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRoute />', () => {
    test('Debe de mostraar el children si no estoy autenticado', () => {

        const contexValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={contexValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    });

    test('Debe de navegar si está autenticado', () => {
        const contexValue = {
            user: {
                id: 123,
                name: 'User Test',
            },
            logged: true,
        };

        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página de Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página de Marvel')).toBeTruthy();
    });
})
