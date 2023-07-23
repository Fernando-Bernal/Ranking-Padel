// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithRedirect,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { ref, set, update, onValue } from "firebase/database";
// import { StartFirebase } from "../services/index";

// const UserContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   const db = StartFirebase();
//   const [user, setUser] = useState({});
//   const createUser = async (email, password) => {
//     await createUserWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider);
//   };

//   const signIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const logout = () => {
//     return signOut(auth);
//   };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       let actualUser = {
//         email: currentUser?.email,
//         idUser: currentUser?.uid,
//       };
//       const userRef = ref(db, "usuarios/" + currentUser?.uid);
//       onValue(userRef, (snapshot) => {
//         console.log(currentUser)
//         if (snapshot.val() === null) {
//           set(userRef, {
//             ...actualUser,
//             admin: false,
//           });
//         } else {
//           update(ref(db, "usuarios/" + actualUser.idUser), actualUser);
//         }
//       });
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
  
//   return (
//     <UserContext.Provider
//       value={{ createUser, user, logout, signIn, googleSignIn }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(UserContext);
// };

// export default AuthContextProvider;
