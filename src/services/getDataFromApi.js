const getDataFromApi = () => {
    return fetch(
        'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
    )
        .then((response) => response.json())
        .then((data) => {
            return data.results.map((character) => {
                return {
                    id: character.id,
                    imageUrl: character.image,
                    name: character.name,
                    species: character.species,
                    origin: character.origin,
                    status: character.status,
                    episodes: character.episode,
                };
            });
        });
};

export default getDataFromApi;
