const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [
				{

				},
			],
			films: [
				{

				},
			],
			planets: [
				{

				},
			],
			species: [
				{

				},
			],
			vehicles: [
				{

				},
			],
			starships: [
				{

				},
			],
			favorites: [
				{

				},
			],
		},
		actions: {
			loadCharacterData: async (characterId) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/people/${characterId}/`);
					const data = await resp.json();

					setStore({ characters: data.results })
				} catch (error) {
					console.error(error);
				}
			},

			loadCharacterList: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people");
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));
					setStore({ characters: datas });

				} catch (error) {
					console.error(error);
				}
			},

			loadFilmData: async (filmId) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/films/${filmId}/`);
					const data = await resp.json();
					setStore({ films: data.results.properties });
				} catch (error) {
					console.error(error);
				}
			},

			loadFilmsList: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/films");
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));
					setStore({ films: datas });

				} catch (error) {
					console.error(error);
				}
			},

			loadPlanetData: async (planetId) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/planets/${planetId}/`);
					const data = await resp.json();

					setStore({ planets: data.results.properties });
				} catch (error) {
					console.error(error);
				}
			},

			loadPlanetList: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets");
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));
					setStore({ planets: datas });

				} catch (error) {
					console.error(error);
				}
			},

			loadSpeciesData: async (speciesId) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/species/${speciesId}/`);
					const data = await resp.json();
					setStore({ species: data.results.properties });
				} catch (error) {
					console.error(error);
				}
			},

			loadSpeciesList: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/species");
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));
					setStore({ species: datas });

				} catch (error) {
					console.error(error);
				}
			},

			loadVehicleData: async (vehiclesId) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/vehicles/${vehiclesId}/`);
					const data = await resp.json();
					setStore({ vehicles: data.results.properties });
				} catch (error) {
					console.error(error);
				}
			},

			loadVehiclesList: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/vehicles");
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));
					setStore({ vehicles: datas });

				} catch (error) {
					console.error(error);
				}
			},

			loadStarshipData: async (starshipId) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/starships/${starshipId}/`);
					const data = await resp.json();
					setStore({ starships: data.results.properties });
				} catch (error) {
					console.error(error);
				}
			},

			loadStarshipsList: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/starships");
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));
					setStore({ starships: datas });

				} catch (error) {
					console.error(error);
				}
			},

			addFavorite: (id, name) => {
				try {
					const store = getStore();
					const findId = store.favorites.findIndex((element) => element.id != id);

					if (findId > -1) {
						const newFavorites = store.favorites.filter((element) => element.id != id);
						setStore({ favorites: newFavorites });
					} else {
						const favoritesList = [...store.favorites, { id: id, name: name }];
						setStore({ favorites: favoritesList })
					}

				} catch (error) {
					console.error(error);
				}
			},

			deleteFavorite: (id) => {
				try {
					const store = getStore();
					const newFavorites = store.favorites.filter((element) => element.id != id);
					setStore({ favorites: newFavorites });

				} catch (error) {
					console.error(error);
				}
			}

		}
	};
};

export default getState;
