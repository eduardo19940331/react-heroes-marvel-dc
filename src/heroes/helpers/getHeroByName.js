import { heroes } from "../data/heroes";

export const getHeroByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];
    const filterHero = heroes.filter(
        (hero) => hero.superhero.toLowerCase().includes(name)
        || hero.alter_ego.toLowerCase().includes(name)
        || hero.first_appearance.toLowerCase().includes(name)
        || hero.characters.toLowerCase().includes(name)
    );

    return filterHero;
}