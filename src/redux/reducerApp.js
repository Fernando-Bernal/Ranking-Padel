import { GET_USER, CLEAR_USER, GET_JUGADORES , GET_FECHAS, ADD_FECHA,} from "./actions";

const initialState = {
	user: null,
	jugadores: [],
	resultados: [],
	fechas: [],
	competencias: ["Padel", "Cruzado", "Truco", "Siete", "Podrida"]
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
		case ADD_FECHA:
			return {
				...state,
				fechas: [...state.fechas, action.payload],
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
