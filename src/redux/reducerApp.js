import { GET_USER, CLEAR_USER, GET_JUGADORES , GET_FECHAS} from "./actions";

const initialState = {
	user: null,
	jugadores: [],
	resultados: [],
};

export function reducerApp(state = initialState, action) {
	switch (action.type) {
		case GET_JUGADORES:
			return {
				...state,
				jugadores: action.payload,
			};
		case GET_FECHAS:
			return {
				...state,
				resultados: action.payload,
			};
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
