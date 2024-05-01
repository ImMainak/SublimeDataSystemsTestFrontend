import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const [customers, setCustomers] = useState([]);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:4060/api/user_list?page=${currentPage}&search=${search}`);
            setCustomers(result.data.data.data);
            setTotalCustomers(result.data.data.total);
        };
        fetchData();
    }, [currentPage, search]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Customer Dashboard</h1>
            <h2 className='mb-4'>Customer List</h2>
            <input type="text" className="form-control mb-4 w-25" style={{marginLeft: '38%'}} placeholder="Search..." value={search} onChange={handleSearchChange} />
            <ul className='row my-3'>
                {customers.length !== 0 && customers?.map(customer => (
                    <div className='col-md-3'>
                        <div className="my-3 mx-3 card" style={{width: '15rem'}} onClick={() => {
                            navigate(`/user/${customer.id}`)
                        }}>
                            <div key={customer?.id} className='card-body'>
                                <div className="card-title text-center" >{customer?.first_name} {customer?.last_name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
            <div>
                <button className='btn btn-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage > 1 ? false : true}>Prev</button>
                <button className='btn btn-primary' style={{marginLeft: '88%'}} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage < Math.ceil(totalCustomers / (currentPage * 10)) ? false : true}>Next</button>
            </div>

            <Link className='btn btn-primary mt-3' to='city' target="_blank">Check City Details</Link>
        </div>
    )
}

export default Dashboard