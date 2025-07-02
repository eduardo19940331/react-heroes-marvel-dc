import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../../src/ui";
import { AuthContext } from "../../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <Navbar />', () => {
    test('Debe de mostrar el nombre del Usuario', () => {
        const userName = 'User Test';
        const contextUser = {
            logged: true,
            user: {
                id: 123,
                name: userName,
            }
        };

        render(
            <AuthContext.Provider value={contextUser}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(userName)).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        const contextUser = {
            logged: true,
            user: {
                id: 123,
                name: 'User Test',
            }
        };

        const logout = jest.fn();

        const fulContext = { contextUser, logout };

        render(
            <AuthContext.Provider value={fulContext}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const btnLogout = screen.getByLabelText("btnLogout");
        fireEvent.click(btnLogout);

        expect(logout).toHaveBeenCalled();

        expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });
})
