import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const SearchCar = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=10')
            .then((res) => {
                setCarData(res.data.cars)
                console.log(res.data.cars)
            })
            .catch((err) => console.log(err.message))
    },[])

    

    return (
        <div>
            <Navbar />
            <h1>SearchCar</h1>
            {
                !!carData.length ? carData.map((item) => {
                    return (
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default SearchCar