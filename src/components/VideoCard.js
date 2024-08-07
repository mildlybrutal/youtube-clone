import React from "react";
import { Play, Clock } from "lucide-react";

const VideoCard = ({ info }) => {
	if (!info) return null;

	const { snippet, statistics } = info;
	const { thumbnails, title, channelTitle, publishedAt } = snippet;

	// Format view count
	const formatViewCount = (count) => {
		if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
		if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
		return count;
	};

	// Calculating time since published
	const timeSincePublished = (publishDate) => {
		const seconds = Math.floor((new Date() - new Date(publishDate)) / 1000);
		let interval = seconds / 31536000;
		if (interval > 1) return Math.floor(interval) + " years ago";
		interval = seconds / 2592000;
		if (interval > 1) return Math.floor(interval) + " months ago";
		interval = seconds / 86400;
		if (interval > 1) return Math.floor(interval) + " days ago";
		interval = seconds / 3600;
		if (interval > 1) return Math.floor(interval) + " hours ago";
		interval = seconds / 60;
		if (interval > 1) return Math.floor(interval) + " minutes ago";
		return Math.floor(seconds) + " seconds ago";
	};

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
			<div className="relative">
				<img className="w-full" src={thumbnails.medium.url} alt={title} />
				<div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded">
					<Clock className="inline-block w-3 h-3 mr-1" />
					{timeSincePublished(publishedAt)}
				</div>
			</div>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 line-clamp-2">{title}</div>
				<p className="text-gray-700 text-base mb-2">{channelTitle}</p>
				<p className="text-gray-600 text-sm flex items-center">
					<Play className="inline-block w-4 h-4 mr-1" />
					{formatViewCount(statistics?.viewCount || 0)} views
				</p>
			</div>
		</div>
	);
};

export default VideoCard;
