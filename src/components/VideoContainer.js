import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		try {
			setIsLoading(true);
			const data = await fetch(YOUTUBE_VIDEOS_API);
			if (!data.ok) {
				throw new Error(`HTTP error! status: ${data.status}`);
			}
			const json = await data.json();
			setVideos(json.items);
		} catch (e) {
			setError("Failed to fetch videos. Please try again later.");
			console.error("Error fetching videos:", e);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-youtube-red"></div>
			</div>
		);
	}

	if (error) {
		return <div className="text-center text-red-500 mt-8">{error}</div>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
			{videos.map((video) => (
				<Link to={"/watch?v=" + video.id} target="blank">
					<VideoCard key={video.id} info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
