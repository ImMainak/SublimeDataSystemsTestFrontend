import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function CityDetails() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCityList = async () => {
            const result = await axios.get('http://localhost:4060/api/city_with_user_count');
            setCities(result.data.data);
        };
        fetchCityList();
    }, []);
  return (
    <div className="container mt-5">
        <div>
            <h2 className='mb-3'>City Details</h2>
        </div>
        {cities.length !== 0 && cities?.map(city => (
            <div key={city.id} className='mb-3'>
                <div>
                    <h5 style={{display: 'inline-block', marginRight: '10px'}}>City Name: </h5>{city.name}
                </div>
                <div>
                    <h5 style={{display: 'inline-block', marginRight: '10px'}}>Customer Count: </h5>{city.user_count}
                </div>
            </div>
        ))}
        <Link className='btn btn-primary mt-3' to='/'>Back To Dashboard</Link>
    </div>
  )
}

export default CityDetails