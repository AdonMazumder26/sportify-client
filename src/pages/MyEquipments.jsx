import { useLoaderData, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

export default function MyEquipments() {
    const equipments = useLoaderData();
    const { darkMode } = useOutletContext();

    const handleDelete = (id) => {
        // TODO: Implement delete request
        console.log("Delete equipment with id:", id);
    };

    return (
        <div
            className={`min-h-screen py-10 px-4 flex flex-col items-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            <h1 className="text-3xl font-bold mb-8">My Equipments</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                {equipments.map((item) => (
                    <div
                        key={item._id}
                        className={`rounded-lg shadow-lg overflow-hidden border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                            }`}
                    >
                        <img
                            src={item.photo}
                            alt={item.itemName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.itemName}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                Category: {item.category}
                            </p>
                            <p className="font-bold mb-1">Price: {item.price} BDT</p>
                            <p className="text-sm mb-3">{item.description}</p>

                            <div className="flex justify-between mt-4">
                                <Link
                                    to={`/update/${item._id}`}
                                    className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                                >
                                    <Pencil size={16} />
                                    Update
                                </Link>

                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
