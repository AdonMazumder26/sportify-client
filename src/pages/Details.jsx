import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { Star } from "lucide-react";

export default function Details() {
    const loadedEquipment = useLoaderData();
    const { darkMode } = useOutletContext();

    if (!loadedEquipment) {
        return (
            <div
                className={`flex justify-center items-center min-h-screen ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
                    }`}
            >
                <p>Equipment not found.</p>
            </div>
        );
    }

    const {
        itemName,
        photo,
        category,
        description,
        price,
        rating,
        customization,
        process,
        stock,
        email,
        name,
    } = loadedEquipment;

    return (
        <div
            className={`min-h-screen flex justify-center items-center p-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
        >
            <div
                className={`max-w-5xl w-full rounded-lg shadow-lg p-6 grid md:grid-cols-2 gap-6 ${darkMode ? "bg-gray-800" : "bg-white"
                    }`}
            >
                {/* Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={photo}
                        alt={itemName}
                        className="w-full max-h-[500px] rounded-lg shadow-md object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center space-y-4">
                    <h1
                        className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"
                            }`}
                    >
                        {itemName}
                    </h1>

                    <p
                        className={`text-lg font-medium ${darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                    >
                        Category:{" "}
                        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
                            {category}
                        </span>
                    </p>

                    {/* Price */}
                    <p
                        className={`text-lg font-semibold ${darkMode ? "text-green-400" : "text-green-600"
                            }`}
                    >
                        Price: ${price}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                        <span
                            className={`text-lg font-medium ${darkMode ? "text-yellow-400" : "text-yellow-600"
                                }`}
                        >
                            Rating: {rating}
                        </span>
                        <Star
                            size={20}
                            className={darkMode ? "text-yellow-400" : "text-yellow-600"}
                        />
                    </div>

                    {/* Description */}
                    <p
                        className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        {description}
                    </p>

                    {/* Customization */}
                    <p
                        className={`text-base ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        Customization: {customization}
                    </p>

                    {/* Processing Time */}
                    <p
                        className={`text-base ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        Processing Time: {process}
                    </p>

                    {/* Stock */}
                    <p
                        className={`text-base ${stock === "In Stock"
                                ? darkMode
                                    ? "text-green-400"
                                    : "text-green-600"
                                : darkMode
                                    ? "text-red-400"
                                    : "text-red-600"
                            }`}
                    >
                        Stock Status: {stock}
                    </p>

                    {/* Seller Info */}
                    <div
                        className={`pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"
                            }`}
                    >
                        <p
                            className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                        >
                            Seller: {name}
                        </p>
                        <p
                            className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                        >
                            Email: {email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
