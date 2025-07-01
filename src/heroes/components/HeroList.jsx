import { useMemo } from "react";
import { validateProps } from "../../utils/validateProps";
import { isStringRequired } from "../../utils/validators";
import { getHeroesByPublisher } from "../helpers";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
    validateProps({ publisher }, { publisher: isStringRequired });

    const heroesPublishes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="row row-cols-1 row-cols-md-2 g-3">
            {
                heroesPublishes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}

export default HeroList
