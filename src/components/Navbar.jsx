import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav
            className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                } shadow-lg transition-colors duration-300`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 max-w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold cursor-pointer">
                        Sportify
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* Theme toggle button before Home */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a
                            href="#home"
                            className="hover:text-green-500 transition-colors duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#equipment"
                            className="hover:text-green-500 transition-colors duration-300"
                        >
                            Equipments
                        </a>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div
                    className={`md:hidden px-4 pb-4 space-y-3 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                        }`}
                >
                    <a
                        href="#home"
                        className="block hover:text-green-500 transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#equipment"
                        className="block hover:text-green-500 transition-colors duration-300"
                    >
                        Equipments
                    </a>
                    <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
}
