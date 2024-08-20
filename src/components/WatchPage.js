import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeMenu());
	}, [dispatch]);

	return (
		<div className="px-5 py-2 w-full">
			<div className="flex flex-col lg:flex-row px-5 py-2 w-full">
				<div className="flex-grow lg:w-3/4 lg:pr-6">
					<div className="aspect-w-16 aspect-h-9">
						<iframe
							className="w-full h-full"
							src={`https://www.youtube.com/embed/${videoId}`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
					{/* Video title and details can be added here */}
				</div>
				<div className="lg:w-1/4 mt-4 lg:mt-0">
					{/* Suggested videos can be added here */}
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;
