import React from "react";
import Button from "./Button";
import {
	Home,
	Flame,
	Music,
	Film,
	Gamepad,
	Newspaper,
	Clock,
	ThumbsUp,
} from "lucide-react";

const categories = [
	{ name: "All", icon: Home },
	{ name: "Trending", icon: Flame },
	{ name: "Music", icon: Music },
	{ name: "Movies", icon: Film },
	{ name: "Gaming", icon: Gamepad },
	{ name: "News", icon: Newspaper },
	{ name: "Live", icon: Clock },
	{ name: "Liked", icon: ThumbsUp },
];

const ButtonList = () => {
	return (
		<div className="relative">
			<div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
			<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
			<div className="flex space-x-3 overflow-x-auto pb-4 pt-2 px-4 scrollbar-hide">
				{categories.map((category, index) => (
					<Button
						key={category.name}
						text={category.name}
						icon={category.icon}
						active={index === 0}
					/>
				))}
			</div>
		</div>
	);
};

export default ButtonList;
