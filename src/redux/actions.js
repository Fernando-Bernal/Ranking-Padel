import { ref, onValue, orderByChild } from "firebase/database";
import { StartFirebase } from "../services/index";
const db = StartFirebase();

export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const GET_JUGADORES = "GET_JUGADORES";

//* GET JUGADORES ordenados por pt
export function getJugadores() {
	return async function (dispatch) {
		try {
			const jugadoresRef = ref(db, "jugadores");

			const snapshot = await new Promise((resolve, reject) => {
				onValue(jugadoresRef, resolve, reject);
			  });
		
			  let ferData = {};
			  let hugoData = {};
			  let javiData = {};
			  let benjaData = {};
		
			  snapshot.forEach((childSnapshot) => {
				const jugadorData = childSnapshot.val();
				const jugadorNombre = childSnapshot.key;
		
				if (jugadorNombre === "Fer") {
				  ferData = { nombre: jugadorNombre, ...jugadorData };
				} else if (jugadorNombre === "Hugo") {
				  hugoData = { nombre: jugadorNombre, ...jugadorData };
				} else if (jugadorNombre === "Javi") {
				  javiData = { nombre: jugadorNombre, ...jugadorData };
				} else if (jugadorNombre === "Benja") {
				  benjaData = { nombre: jugadorNombre, ...jugadorData };
				}
			  });
				// Ordenar los jugadores por "pt" (puntos totales) de mayor a menor
				const players = [ferData, hugoData, javiData, benjaData].sort((a, b) => b.pt - a.pt);
				dispatch({ type: GET_JUGADORES, payload: players });
		} catch (error) {
			console.log(error);
		}
	};
}


