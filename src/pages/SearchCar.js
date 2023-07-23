import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import './pages.css'
import { Link } from "react-router-dom";

const SearchCar = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api-car-rental.binaracademy.org/customer/v2/car')
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
                            <div className="car-card">
                                <img src={item.image} />
                            </div>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <p>Lorem ipsum</p>
                            <Link to={`/detailcar/${item.id}`}>
                                <button>Pilih Mobil</button>
                            </Link>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default SearchCar