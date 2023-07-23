import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetail = () => {
    const { id } = useParams();
    const [detailCar, setDetailCar] = useState({});

    useEffect(() => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
            .then((res) => {
                console.log(res.data)
                setDetailCar(res.data)
            })
            .catch((err) => console.log(err.message))
    }, [])

    return (
        <div>
            <h1>CarDetails</h1>
            {
              Object.entries(detailCar).length ? (
                <div>
                    <img src={detailCar.image} />
                    <h1>{detailCar.name}</h1>
                    <p>{detailCar.price}</p>
                </div> ) : (
                <h1>Loading</h1>
                
              )  
            }
        </div>
    )
}

export default CarDetail