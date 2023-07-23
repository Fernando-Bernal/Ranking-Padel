import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import AuthContext from "./context/AuthContext";
import Home from "./componentes/Home.jsx";
// import Layout from "./componentes/Layout";
// import User from "./componentes/User";
function App() {
	return (
		<>
			<div >
				{/* <AuthContext> */}
					<Routes>
						<Route exact path="/" element={<Home />} />
						{/* <Route exact path="/login" element={<Layout />} />
						<Route exact path="/usuario" element={ <User />}/> */}
					</Routes>
				{/* </AuthContext> */}
			</div>
		</>
	);
}

export default App;
