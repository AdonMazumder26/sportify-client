import React from "react";

const Equipment = ({ equipment, darkMode }) => {
    return (
        <div
            className={`shadow-lg rounded-lg overflow-hidden flex flex-col transition-colors ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                }`}
        >
            {equipment.photo && (
                <img
                    src={equipment.photo}
                    alt={equipment.itemName}
                    className="h-48 w-full object-cover"
                />
            )}
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold">{equipment.itemName}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    {equipment.category}
                </p>
                <p className="text-sm mt-2 flex-grow">
                    {equipment.description.length > 80
                        ? equipment.description.slice(0, 80) + "..."
                        : equipment.description}
                </p>
                <p className="mt-2 font-semibold">
                    Price: ${equipment.price}
                </p>
                <p className="text-sm mt-1">Stock: {equipment.stock}</p>
                <button

                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Equipment;
