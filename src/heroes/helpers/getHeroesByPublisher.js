import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publicher) => {
    const validPublichers = ['Marvel Comics', 'DC Comics'];
    if (!validPublichers.includes(publicher)) {
        throw new Error(`${publicher} no es un publicado valido`);

    }

    return heroes.filter(heroe => heroe.publisher === publicher);
}