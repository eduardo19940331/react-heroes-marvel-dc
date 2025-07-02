import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>);
    const isLong = characters.length > 30;
    const displayText = isLong ? characters.slice(0, 30) + "..." : characters;
    const display = (
        <span title={isLong ? characters : ""}>
            {displayText}
        </span>
    );
    return (display);
}

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `${import.meta.env.BASE_URL}heroes/${id}.jpg`;

    return (
        <div className='col mt-2 animate__animated animate__fadeIn'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-6">
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>
                    <div className="col-6">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {/* Definido en este mismo componente */}
                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className='card-text'>
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h3>HeroCard</h3>
            <small>{superhero}</small> */}
        </div>
    )
}

export default HeroCard
