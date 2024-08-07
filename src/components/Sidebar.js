import React from "react";
import { Home, Music, Trophy, Code, Film, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

const SidebarItem = ({ Icon, text }) => (
	<li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200">
		<Icon className="h-5 w-5 text-gray-600" />
		<span className="text-sm font-medium text-gray-700">{text}</span>
	</li>
);

const Sidebar = () => {
	const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

	if (!isMenuOpen) {
		return null;
	}

	return (
		<div className="w-64 bg-white shadow-lg p-4 h-screen sticky top-0 overflow-y-auto">
			<nav>
				<ul className="space-y-2">
					<SidebarItem Icon={Home} text="Home" />
					<SidebarItem Icon={Music} text="Music" />
					<SidebarItem Icon={Trophy} text="Sports" />
					<SidebarItem Icon={Code} text="Coding" />
					<SidebarItem Icon={Film} text="Movies" />
				</ul>
			</nav>
			<div className="mt-8">
				<h3 className="text-lg font-semibold text-gray-700 mb-2">
					Subscriptions
				</h3>
				<ul className="space-y-2">
					<li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-red-500 rounded-full"></div>
							<span className="text-sm font-medium text-gray-700">
								Channel 1
							</span>
						</div>
						<ChevronRight className="h-4 w-4 text-gray-400" />
					</li>
					<li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-blue-500 rounded-full"></div>
							<span className="text-sm font-medium text-gray-700">
								Channel 2
							</span>
						</div>
						<ChevronRight className="h-4 w-4 text-gray-400" />
					</li>
					<li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-green-500 rounded-full"></div>
							<span className="text-sm font-medium text-gray-700">
								Channel 3
							</span>
						</div>
						<ChevronRight className="h-4 w-4 text-gray-400" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
