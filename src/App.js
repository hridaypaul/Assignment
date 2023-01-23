
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  let company, name, city, email, phone, address, country
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }, [])
  console.log(data)

  return (
    <>
      {data.map((item) =>
        <div className="container my-5 border py-3 bg-light">
          <div className='d-flex justify-content-around'>
            <ul>{item.company.name}</ul>
            <ul className='fw-semibold'>CONTACT<br />{item.name}</ul>
            <ul className='fw-semibold'>CITY<br />{item.address.city}</ul>
            <ul className='fw-semibold'>STATE<br />Gujrat</ul>
            <div>
              <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample">
                Show Details
              </button>
            </div>
          </div>
          <div className="collapse" id={`collapseExample${item.id}`}>
            <div className="card card-body">
              <h6>Description</h6>
              <p>Providing service of domestic flight booking @ lowest price guarenteed and also for railway e tickit booking. also offering international flight tickets.giving services to our customers since 1995. now going to start hajj and umrah very soon for our valuable customers it will be allso @ very affordable prices.</p>
              <div className='row'>
                <div className='col'>
                  <h6>Contact Person</h6>
                  <p>{item.name}</p>
                  <h6>Designation</h6>
                  <p>{item.username}</p>
                  <h6>Emails</h6>
                  <p>{item.email}</p>
                  <h6>Phone</h6>
                  <p>{item.phone}</p>

                </div>
                <div className='col'>
                  <h6>Address</h6>
                  <p>{item.address.street}{item.address.suite}{item.address.city}{item.address.zipcode}</p>
                  <h6>City</h6>
                  <p>{item.address.city}</p>
                  <h6>State</h6>
                  <p>Gujrat</p>
                  <h6>Country</h6>
                  <p> India</p>

                </div>
              </div>
            </div>
          </div>
        </div>
 
      )}

    </>
  );
}

export default App;
