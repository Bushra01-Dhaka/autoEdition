import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const EachBrandCards = () => {
    const brands = useLoaderData();
    const {brand_name} = brands; 

   
    console.log(brands.brand_name);

    const [selectedBrand, setSelectedBrand] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${brands.brand_name}`)
        .then(res => res.json())
        .then(data => {
            setSelectedBrand(data);
        })
        .catch(error => console.error(error))
    },[brands.brand_name]);

    console.log(selectedBrand);

    
    return (
        <div>
             <h1 className="text-4xl text-center font-bold">Brand Cards Details: {brand_name}</h1>
        </div>
    );
};

export default EachBrandCards;