import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string";
import { getHeroByName } from "../helpers";
import { useEffect, useMemo } from "react";

const SearchPage = () => {

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: ''
    });

    const navigate = useNavigate();

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroes = useMemo(() => {
        return getHeroByName(q);
    }, [q]);

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length < 0) return;

        navigate(`?q=${searchText.trim()}`);

        onResetForm();
    };

    const printMesagge = useMemo(() => {
        if (q.length <= 0) return <div className="alert alert-info animate__animated animate__fadeIn">Resultados de la busqueda <b>{q}</b></div>;
        return (heroes.length > 0) ?
            (<div className="alert alert-success animate__animated animate__fadeIn">Resultados de la busqueda <b>{q}</b></div>) :
            (<div className="alert alert-danger animate__animated animate__fadeIn">No hay coincidencias con la busqueda <b>{q}</b></div>);
    }, [heroes, q]);

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <h1>Busqueda</h1>
                </div>
                <div className="col-8">
                    <form onSubmit={onSearchSubmit}>
                        <div className="input-group mb-3 mt-2">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={onInputChange} />
                            <button className="btn btn-outline-success">Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            {
                printMesagge
            }
            <div className="row row-cols-1 row-cols-md-2 g-3">
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                }
            </div>
        </>
    )
}
export default SearchPage