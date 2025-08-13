import React from "react";
import Equipment from "./Equipment";

const Equipments = ({ loadedEquipments, darkMode }) => {
    // console.log(loadedEquipments);
    return (
        <div
            className={`max-w-screen mx-auto lg:p-20 md:p-10 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            <div className="max-w-7xl mx-auto sm:p-5">
                <h1 className="text-2xl font-bold mb-10 text-center">Our Equipments</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loadedEquipments.map((equipment) => (
                        <Equipment
                            key={equipment._id}
                            equipment={equipment}
                            // onViewDetails={onViewDetails}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Equipments;
