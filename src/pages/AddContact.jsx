import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AddContact() {

  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const {slug} = useParams()  //para poder acceder a los parametros que me pasan por URL

  const saveContact = (e) => {
    e.preventDefault()   //no se refresca, prevenir comportamiento standar del navegador frente al boton
    fetch('https://playground.4geeks.com/contact/agendas/contactList/contacts', {
      method: 'POST',
      body: JSON.stringify({ name, address: adress, phone, email }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName('');
        setEmail('');
        setPhone('');
        setAdress('');

      })
      .catch(err => console.log('Error', err));
  }

  const handdleNavigate = () => {
    navigate(`/contacts/${slug}`)
  }

  return (
    <div>
      <form className="mx-4">

        <h1 className="text-center">Add a new contact</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmai4" className="form-label fw-bold">Full Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Full Name"
            value={name}
          />

        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email" className="form-control"
            id="exampleInputEmail"
            placeholder="Enter Email"
            value={email} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label fw-bold">Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text" className="form-control"
            id="exampleInputPhone"
            placeholder="Enter Phone"
            value={phone}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="form-label fw-bold">Address</label>
          <input
            onChange={(e) => setAdress(e.target.value)}
            type="text" className="form-control"
            id="exampleInputAddress"
            placeholder="Enter Address"
            value={adress}
          />
        </div>

        <button onClick={saveContact} type="submit" className="btn btn-primary w-100">Save</button>

        <button className='btn btn-primary' onClick={() => handdleNavigate()}>to Contact</button>

      </form>
    </div >
  )
}

export default AddContact
