import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
	return (
		<div className="flex bg-gray-50 min-h-screen">
			<Sidebar />
			<MainContainer />
		</div>
	);
};

export default Body;
