import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="flex-1 p-6 overflow-y-auto">
			<div className="max-w-7xl mx-auto">
				<ButtonList />
				<VideoContainer />
			</div>
		</div>
	);
};

export default MainContainer;
