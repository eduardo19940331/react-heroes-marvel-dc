import { MemoryRouter } from "react-router-dom";
import SearchPage from "../../../src/heroes/pages/SearchPage";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <SearchPage/>', () => {
    test('Debe de mostrarse correctamente con valores por defecto', () => {
        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        screen.debug();
    });
})
