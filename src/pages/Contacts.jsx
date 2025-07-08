import React from 'react'
import { useParams } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from '../services/fetchs.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../components/ContactCard.jsx';

function Contacts() {
  const { store, dispatch } = useGlobalReducer()
  const { slug } = useParams()
  const { listaContactos } = store
  const navigate = useNavigate()

  useEffect(() => {
    getContacts(dispatch, slug)
  }, [dispatch, slug]);

  const handdleNavigate = () => {
    navigate(`/addContacts/${slug}`)
  }

  console.log(listaContactos)
  console.log({ slug })
  return (
    <div className='container text-center mb-2'>
      <h1 className='m-3'>Soy la lista de contactos de {slug}</h1>

      <div>
        <button className='btn btn-primary m-5' onClick={() => handdleNavigate()}>
          Add Contact
        </button>

        <div> {

          listaContactos === 0 ? (<p>'Esta agenda no tiene contactos)</p>) : (
            <div className="row">
              {
                listaContactos.map((contacto) => (
                  <div key={contacto.id}>
                    <ContactCard name={contacto.name} adress={contacto.address} phone={contacto.phone} email={contacto.email} id={contacto.id} slug={slug} />
                  </div>
                ))
              }
            </div>
          )

        } </div>

      </div>
    </div>
  )
}

export default Contacts
