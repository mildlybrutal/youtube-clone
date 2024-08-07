import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeMenu());
	}, [dispatch]);

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 mx-10 -my-18">
			<div className="shadow-lg rounded-lg overflow-hidden">
				<iframe
					className="w-[960px] h-[540px]"
					src={`https://www.youtube.com/embed/${videoId}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default WatchPage;
