import React from "react";

const Button = ({ text, active = false, icon: Icon }) => {
	return (
		<button
			className={`
          flex items-center px-4 py-2 rounded-full transition-all duration-300 ease-in-out overflow-x-auto scrollbar-hide
          ${
						active
							? "bg-gray-900 text-white shadow-lg"
							: "bg-gray-100 text-gray-700 hover:bg-gray-200"
					}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
        `}
		>
			{Icon && <Icon className={`w-5 h-5 ${text ? "mr-2" : ""}`} />}
			<span className="font-medium">{text}</span>
		</button>
	);
};

export default Button;
