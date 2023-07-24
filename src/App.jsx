import { useState } from "react";

import { Routes, Route } from "react-router-dom";
// import AuthContext from "./context/AuthContext";
import Home from "./componentes/Home.jsx";
import Admin from "./componentes/Admin.jsx";
// import Layout from "./componentes/Layout";
// import User from "./componentes/User";
function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/admin" element={<Admin />} />
				{/* <Route exact path="/login" element={<Layout />} />
						<Route exact path="/usuario" element={ <User />}/> */}
			</Routes>
		</>
	);
}

export default App;
