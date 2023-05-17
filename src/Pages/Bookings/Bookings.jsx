import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Bookings = () => {
const {user}=useContext(AuthContext);
const [bookings,setBookings]=useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/checkout?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setBookings(data))
},[])


    return (
        <div>
        <h2>bookings car : {bookings.length}</h2>
        </div>
    );
};

export default Bookings;