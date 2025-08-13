import React, { useState } from "react";
import { Eye, ArrowUpDown } from "lucide-react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";

export default function AllEquipments() {
    const { darkMode } = useOutletContext();
    const loadedEquipments = useLoaderData();
    const [sortOrder, setSortOrder] = useState("asc");

    // Function to handle sorting
    const sortedEquipments = [...loadedEquipments].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    const toggleSort = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    if (!loadedEquipments || loadedEquipments.length === 0) {
        return (
            <div
                className={`flex justify-center items-center min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
            >
                <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                    No equipments available
                </p>
            </div>
        );
    }

    return (
        <div
            className={`flex justify-center items-center min-h-screen p-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
        >
            <div
                className={`w-full max-w-6xl shadow-lg rounded-lg overflow-x-auto ${darkMode ? "bg-gray-800" : "bg-white"
                    }`}
            >
                <h2
                    className={`text-2xl font-bold text-center py-4 ${darkMode ? "text-white" : "text-gray-800"
                        }`}
                >
                    All Equipments
                </h2>

                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr
                            className={`${darkMode
                                ? "bg-gray-700 text-gray-200"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            <th className="px-4 py-3 text-left">Item Name</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th
                                className="px-4 py-3 text-left cursor-pointer flex items-center gap-1"
                                onClick={toggleSort}
                            >
                                Price
                                <ArrowUpDown
                                    className={`w-4 h-4 ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`}
                                />
                            </th>
                            <th className="px-4 py-3 text-center">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEquipments.map((item) => (
                            <tr
                                key={item._id}
                                className={`border-b transition-colors ${darkMode
                                    ? "hover:bg-gray-700 border-gray-700"
                                    : "hover:bg-gray-100 border-gray-200"
                                    }`}
                            >
                                <td
                                    className={`px-4 py-3 ${darkMode ? "text-gray-200" : "text-gray-800"
                                        }`}
                                >
                                    {item.itemName}
                                </td>
                                <td
                                    className={`px-4 py-3 ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    {item.category}
                                </td>
                                <td
                                    className={`px-4 py-3 font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"
                                        }`}
                                >
                                    ${item.price}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <Link to={`/equipment/${item._id}`}>
                                        <Eye
                                            className={`inline-block transition-colors ${darkMode
                                                ? "text-gray-300 hover:text-blue-400"
                                                : "text-gray-600 hover:text-blue-500"
                                                }`}
                                        />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
