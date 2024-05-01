import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function UserDetails() {
    let { userId } = useParams();
    const [customers, setCustomers] = useState({});

    useEffect(() => {
        const fetchCustomerDetails = async () => {
            const result = await axios.get('http://localhost:4060/api/user_details/' + userId);
            setCustomers(result.data.data);
        };
        fetchCustomerDetails();
    }, [userId]);

    return (
        <>
            {Object.keys(customers).length !== 0 && 
            <div className="container mt-5">
                <div>
                    <h2 className='mb-3'>Customer Details</h2>
                </div>
                <div>
                    <h5 style={{display: 'inline-block', marginRight: '10px'}}>First Name: </h5>{customers.first_name}
                </div>
                <div>
                    <h5 style={{display: 'inline-block', marginRight: '10px'}}>Last Name: </h5>{customers.last_name}
                </div>
                <div>
                    <h5 style={{display: 'inline-block', marginRight: '10px'}}>City: </h5>{customers.city}
                </div>
                <div>
                    <h5 style={{display: 'inline-block', marginRight: '10px'}}>Company: </h5>{customers.company}
                </div>
                <Link className='btn btn-primary mt-3' to='/'>Back To Dashboard</Link>
            </div>}
        </>
    )
}

export default UserDetails