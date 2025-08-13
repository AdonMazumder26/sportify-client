import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyEquipments = () => {
    const loadedMyEquipments = useLoaderData();
    console.log(loadedMyEquipments);
    return (
        <div>

        </div>
    );
};

export default MyEquipments;