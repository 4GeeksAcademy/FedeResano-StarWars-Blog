import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.loadCharacterData();
			state.actions.loadCharacterList();
			state.actions.loadFilmData();
			state.actions.loadFilmsList();
			state.actions.loadPlanetData();
			state.actions.loadPlanetList();
			state.actions.loadSpeciesData();
			state.actions.loadSpeciesList();
			state.actions.loadVehicleData();
			state.actions.loadVehiclesList();
			state.actions.loadStarshipData();
			state.actions.loadStarshipsList();
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
