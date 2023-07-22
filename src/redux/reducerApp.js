import { GET_USER, CLEAR_USER } from "./actions";

const initialState = {
	user: null,
	jugadores: [],
	fechas: [],
};

export function reducerApp(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				user: action.payload,
			};
		case CLEAR_USER:
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
}

export default reducerApp;
