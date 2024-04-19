const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [
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
			apiFetch: async (endpoint, method = "GET", body = null) => {
				try {
					let params = {
						method,
						headers: {
							"Access-Control-Allow-Origin": "*"
						}
					};

					if (body != null) {
						params.body = JSON.stringify(body)
						params.headers["Content-Type"] = "application/json"
					}

					let resp = await fetch("https://www.swapi.tech/api" + endpoint, params)

					if (!resp.ok) {
						console.error(resp.statusText);
						return { error: resp.statusText }
					}

					return resp
				} catch (error) {
					console.error("Error:", error)
				}
			},
			loadCharacterData: async (peopleId) => {
				try {
					const resp = await getActions().apiFetch(`/people/${peopleId}`, "GET")
					const data = await resp.json();

					setStore({ people: data.result })
				} catch (error) {
					console.error(error);
				}
			},

			loadCharacterList: async () => {
				try {
					const resp = await getActions().apiFetch(`/people`, "GET")
					const data = await resp.json();

					const requests = data.results.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));

					setStore({ people: datas });
				} catch (error) {
					console.error(error);
				}
			},

			loadFilmData: async (filmId) => {
				try {
					const resp = await getActions().apiFetch(`/films/${filmId}`, "GET")
					const data = await resp.json();

					setStore({ films: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			loadFilmsList: async () => {
				try {
					const resp = await getActions().apiFetch(`/films`, "GET")
					const data = await resp.json();

					const requests = data.result.map((item) => fetch(item.url));
					const response = await Promise.all(requests);
					const datas = await Promise.all(response.map((item) => item.json()));

					setStore({ films: datas });
				} catch (error) {
					console.error(error);
				}
			},

			loadPlanetData: async (planetId) => {
				try {
					const resp = await getActions().apiFetch(`/planets/${planetId}`, "GET")
					const data = await resp.json();

					setStore({ planets: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			loadPlanetList: async () => {
				try {
					const resp = await getActions().apiFetch(`/planets`, "GET")
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
					const resp = await getActions().apiFetch(`/species/${speciesId}`, "GET")
					const data = await resp.json();

					setStore({ species: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			loadSpeciesList: async () => {
				try {
					const resp = await getActions().apiFetch(`/species`, "GET")
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
					const resp = await getActions().apiFetch(`/vehicles/${vehiclesId}`, "GET")
					const data = await resp.json();
					setStore({ vehicles: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			loadVehiclesList: async () => {
				try {
					const resp = await getActions().apiFetch(`/vehicles`, "GET")
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
					const resp = await getActions().apiFetch(`/starships/${starshipId}`, "GET")
					const data = await resp.json();

					setStore({ starships: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			loadStarshipsList: async () => {
				try {
					const resp = await getActions().apiFetch(`/starships`, "GET")
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
