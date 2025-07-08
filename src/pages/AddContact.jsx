import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { createContact, updateContact } from '../services/fetchs';

function AddContact() {
  const { store, dispatch } = useGlobalReducer()
  const { slug, id } = useParams()  //para poder acceder a los parametros que me pasan por URL
  const [contact, setContact] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  })
  useEffect(() => {
    if (id) {
      const contactoExistente = store.listaContactos.find(
        (c) => c.id === parseInt(id)
      );
      if (contactoExistente) {
        setContact(contactoExistente)
      }
    }
  }, [id, store.listaContactos]);

  const navigate = useNavigate()


  console.log(contact)
  const handdleContact = async (e) => {
    e.preventDefault();
    if (id) {
      updateContact(contact, dispatch, slug)
    } else {
      await createContact(contact, dispatch, slug)
    }
    navigate(`/contacts/${slug}`)
  }

  return (
    <div className='container'>
      <form className="row border border-2 border-light-subtle rounded-3 p-4 border-opacity-75 pt-2">

        {
          id ? <h1 className="text-center">Edit contact</h1> : <h1 className="text-center">Add a new contact</h1>
        }

        <div className="mb-3 col-md-6 col-12">
          <label htmlFor="exampleInputEmai4" className="form-label fw-bold">Full Name</label>
          <input
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Full Name"
            value={contact.name}
          />

        </div>

        <div className="mb-3 col-md-6 col-12">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Email</label>
          <input
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            type="email" className="form-control"
            id="exampleInputEmail"
            placeholder="Enter Email"
            value={contact.email} />
        </div>

        <div className="mb-3 col-md-3 col-12">
          <label htmlFor="exampleInputEmail2" className="form-label fw-bold">Phone</label>
          <input
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            type="text" className="form-control"
            id="exampleInputPhone"
            placeholder="Enter Phone"
            value={contact.phone}
          />
        </div>

        <div className="mb-3 col-md-9 col-12">
          <label htmlFor="exampleInputEmail3" className="form-label fw-bold">Address</label>
          <input
            onChange={(e) => setContact({ ...contact, address: e.target.value })}
            type="text" className="form-control"
            id="exampleInputAddress"
            placeholder="Enter Address"
            value={contact.address}
          />
        </div>

        <button onClick={(e) => handdleContact(e)} type="submit" className="btn btn-primary w-100">
          {id ? 'Actualizar' : 'Agregar'}
        </button>

      </form>
    </div >
  )
}

export default AddContact
