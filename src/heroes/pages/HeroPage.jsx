import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

const HeroPage = () => {

    const { keyHero } = useParams();
    const hero = useMemo( () => getHeroById(keyHero), [keyHero]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to={"/marvel"} />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/heroes/${keyHero}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>
                    {hero.superhero}
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearence:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <ul>
                    {hero.characters.split(",").map((character) => (<li key={character}>{character.trim()}</li>))}
                </ul>
            </div>

            <button className="btn btn-outline-danger mt-5" onClick={onNavigateBack}>Regresar</button>
        </div>
    )
}

export default HeroPage
