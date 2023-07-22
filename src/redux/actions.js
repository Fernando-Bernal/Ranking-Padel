import { ref, onValue } from "firebase/database";
import { StartFirebase } from "../services/index";
const db = StartFirebase();

export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";




export function getUserById(idUser) {
	return function (dispatch) {
		const userRef = ref(db, "usuarios/" + idUser);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			dispatch({ type: "GET_USER", payload: data });
		});
	};
}

export function clearUser() {
	return function (dispatch) {
		dispatch({ type: "CLEAR_USER" });
	};
}
