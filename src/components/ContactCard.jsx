import React from "react";
import rigoBaby from "../assets/img/rigo-baby.jpg";
import { deleteContact } from "../services/fetchs";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";


function ContactCard({ name, adress, phone, email, id, slug }) {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const handleDelete = async () => {
        deleteContact(id, dispatch, slug)
    }


    const handleNavigate = () => {
        navigate(`/addContacts/${slug}/${id}`)
    }

    return (
        <div>
            <div className="row d-flex card-contacts">

                <div className="contact-card d-flex">
                    <img src={rigoBaby} alt="Mike Anamendolla" className="contact-photo mx-5" />

                    <div className="container">
                        <div className="contact-header">
                            <h2 className="contact-name">{name}</h2>

                        </div>

                        <div className="contact-details">
                            <div className="detail">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{adress}</span>
                            </div>

                            <div className="detail">
                                <i className="fas fa-phone-alt"></i>
                                <span>{phone}</span>
                            </div>
                            <div className="detail">
                                <i className="fas fa-envelope"></i>
                                <span>{email}</span>
                            </div>
                        </div>

                    </div>

                    <div className="contact-actions d-flex gap-2 m-1">

                        <div>
                            <button onClick={() => handleNavigate()} className="btn btn-primary" title="Editar">
                                Editar
                            </button>
                        </div>

                        <div>
                            <button onClick={() => handleDelete()} className="btn btn-danger" title="Eliminar">
                                Eliminar
                            </button>
                        </div>


                    </div>
                </div>

            </div>



        </div>

    );
};

export default ContactCard;