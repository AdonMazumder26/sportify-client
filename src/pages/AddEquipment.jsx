import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useOutletContext } from "react-router-dom";

export default function AddEquipment() {

    const { user } = useContext(AuthContext);

    const { darkMode } = useOutletContext();
    // console.log(user);
    const handleAddItem = (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const itemName = form.itemName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const process = form.process.value;
        const stock = form.stock.value;
        const description = form.description.value;
        const email = form.email.value;
        const name = form.name.value;
        const newEquipment = { itemName, photo, category, price, rating, customization, process, stock, description, email, name };
        console.log(newEquipment);

        fetch("http://localhost:5000/equipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }


    return (
        <div
            className={`min-h-screen flex justify-center items-center p-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
        >
            <form onSubmit={handleAddItem}
                className={`w-full max-w-5xl rounded-lg shadow-lg p-6 md:p-8 ${darkMode ? "bg-gray-800" : "bg-white"
                    }`}
            >
                <h2
                    className={`text-2xl font-bold mb-6 text-center ${darkMode ? "text-white" : "text-gray-900"
                        }`}
                >
                    Add New Equipment
                </h2>

                {/* Grid for Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Image URL */}
                    <input
                        type="text"
                        name="photo"
                        placeholder="Image URL"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Item Name */}
                    <input
                        type="text"
                        name="itemName"
                        placeholder="Item Name"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Category Name */}
                    <input
                        type="text"
                        name="category"
                        placeholder="Category Name"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Price */}
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Rating */}
                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (0-5)"
                        step="0.1"
                        min="0"
                        max="5"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Customization */}
                    <input
                        type="text"
                        name="customization"
                        placeholder="Customization"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Processing Time */}
                    <input
                        type="text"
                        name="process"
                        placeholder="Processing Time"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* Stock Status */}
                    <input
                        type="text"
                        name="stock"
                        placeholder="Stock Status"
                        defaultValue=""
                        className={`p-3 rounded border w-full ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    />

                    {/* User Email (Read-only) */}
                    <input
                        type="email"
                        placeholder="User Email"
                        name="email"
                        readOnly
                        defaultValue={user.email}
                        className={`p-3 rounded border w-full cursor-not-allowed ${darkMode
                            ? "bg-gray-600 border-gray-500 text-gray-300"
                            : "bg-gray-200 border-gray-300 text-gray-700"
                            }`}
                    />

                    {/* User Name (Read-only) */}
                    <input
                        type="text"
                        placeholder="User Name"
                        readOnly
                        name="name"
                        defaultValue={user.displayName}
                        className={`p-3 rounded border w-full cursor-not-allowed ${darkMode
                            ? "bg-gray-600 border-gray-500 text-gray-300"
                            : "bg-gray-200 border-gray-300 text-gray-700"
                            }`}
                    />

                    {/* Description (Full Width) */}
                    <textarea
                        placeholder="Description"
                        rows="4"
                        name="description"
                        defaultValue=""
                        className={`p-3 rounded border w-full md:col-span-2 ${darkMode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                            }`}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className={`px-6 py-3 rounded-lg font-semibold ${darkMode
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                            }`}
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}
