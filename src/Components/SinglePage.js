import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect, useRef } from 'react';


function SinglePage(props) {
    
    let { id } = useParams();

    const [customers, setCustomers] = useState({ customer: { first_name: "", last_name: "", email: "", phone: "", total_spent: "", orders_count: "",currency:"",default_address:""} })

    const [updatecustomer, setUpdatecustomer] = useState({ editfirst_name: "", editlast_name: "", editemail: "", editphone: ""})

    useEffect(() => {
        const getcustomer = async () => {
            const customer = await fetch(`http://localhost:3400/getcustomer/${id}`)
            const response = await customer.json()
            setCustomers(response)
        }
        getcustomer();
        // eslint-disable-next-line
    },[])

    const update = () => {
        setUpdatecustomer({ editfirst_name: customers.customer.first_name, editlast_name: customers.customer.last_name, editemail: customers.customer.email, editphone: customers.customer.phone})
    }

    const closeref = useRef(null)


    const onchange = (e) => {
        setUpdatecustomer({ ...updatecustomer, [e.target.name]: e.target.value })
    }

    const onClick = async (e) => {
        e.preventDefault();
        const { editfirst_name, editlast_name, editphone, editemail} = updatecustomer

        const response = await fetch(`http://localhost:3400/updatecustomer/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                first_name: editfirst_name,
                last_name: editlast_name,
                phone: editphone,
                email: editemail
            })
        })
        const json = await response.json()
        console.log(json);
        closeref.current.click()
        window.location.reload()
    }


    return (
        <>
            <div className="container">
        <h2 className='text-center my-1'>DETAIL OF {customers.customer.first_name}  {customers.customer.last_name}</h2>

                <table className="table">

                    <tbody>
                        <tr>
                            <th scope="row">FIRST NAME</th>
                            <td>{customers.customer.first_name}</td>
                        </tr>
                        <tr>
                            <th scope="row">LAST NAME</th>
                            <td>{customers.customer.last_name}</td>
                        </tr>
                        <tr>
                            <th scope="row">EMAIL</th>
                            <td>{customers.customer.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">PHONE NUMBER</th>
                            <td>{customers.customer.phone}</td>
                        </tr>
                        <tr>
                            <th scope="row">TOTAL SPENT</th>
                            <td>{customers.customer.total_spent}</td>
                        </tr>
                        <tr>
                            <th scope="row">TOTAL ORDERS</th>
                            <td>{customers.customer.orders_count}</td>
                        </tr>
                        <tr>
                            <th scope="row">CURRENCY</th>
                            <td>{customers.customer.currency}</td>
                        </tr>
                        <tr>
                            <th scope="row">ADDRESSE</th>
                            <td>{customers.customer.default_address.address1}{customers.customer.default_address.address2}</td>
                        </tr>
                        <tr>
                            <th scope="row">CITY</th>
                            <td>{customers.customer.default_address.address1}{customers.customer.default_address.city}</td>
                        </tr>
                        <tr>
                            <th scope="row">PROVINCE</th>
                            <td>{customers.customer.default_address.address1}{customers.customer.default_address.province}</td>
                        </tr>
                        <tr>
                            <th scope="row">COUNTRY</th>
                            <td>{customers.customer.default_address.address1}{customers.customer.default_address.country}</td>
                        
                            <th scope="row">ZIP CODE</th>
                            <td>{customers.customer.default_address.address1}{customers.customer.default_address.zip}</td>
                        </tr>
                        

                    </tbody>
                </table>

                <div className="mod">
                    <button type="button" className="btn btn-primary" onClick={update} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Update Details
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">UPDATE CUSTOMER DETAILS</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method='POST'>
                                        <label>FIRST NAME</label>
                                        <input type="text" id="editfirst_name" name="editfirst_name" value={updatecustomer.editfirst_name} onChange={onchange} />
                                        <br />
                                        <label>LAST NAME</label>
                                        <input type="text" id="editlast_name" name="editlast_name" value={updatecustomer.editlast_name} onChange={onchange} />
                                        <br />
                                        <label>PHONE NUMBER</label>
                                        <input type="text" id="editphone" name="editphone" value={updatecustomer.editphone} onChange={onchange} />
                                        <br />
                                        <label>EMAIL</label>
                                        <input type="text" id="editemail" name="editemail" value={updatecustomer.editemail} onChange={onchange} />
                                        <br />
                                        
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" ref={closeref} data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary" onClick={onClick}>Save changes</button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SinglePage
