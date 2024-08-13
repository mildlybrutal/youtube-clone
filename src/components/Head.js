/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Search, Menu, Mic, Video, Bell, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        getSuggestions(searchCache[searchQuery]);
      } else {
        setSuggestions([]);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="flex justify-between items-center p-3 mb-6 sticky top-0 bg-white shadow-md z-10">
      <div className="flex items-center">
        <Menu
          className="h-6 w-6 mr-4 cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-200"
          onClick={toggleMenuHandler}
        />
        <div className="flex items-center space-x-1">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="Logo"
            className="h-20 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center flex-grow justify-center max-w-3xl relative">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Discover amazing content..."
            className="w-full px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-red-400 focus:bg-white transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="px-6 py-2 bg-red-500 text-white rounded-r-full hover:bg-red-600 transition-colors duration-200">
            <Search className="h-5 w-5" />
          </button>
        </div>
        <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
          <Mic className="h-5 w-5 text-gray-700" />
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <Video className="h-6 w-6 text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer" />
        <Bell className="h-6 w-6 text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer" />
        <div className="relative group">
          <User className="h-8 w-8 text-gray-700 bg-gray-200 rounded-full p-1 cursor-pointer group-hover:text-red-500 transition-colors duration-200" />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Channel
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
