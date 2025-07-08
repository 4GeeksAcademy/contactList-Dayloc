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
        <div className="card-contacts row my-2">
            <img src={rigoBaby} alt="Mike Anamendolla" className="contact-photo m-2 col-md-2 col-12 img-fluid rounded-circle" />

            <div className="col text-start">
                <div className="contact-header">
                    <h2 className="contact-name">{name}</h2>
                </div>

                <div className="contact-details">
                    <div className="detail">
                        <i className="fas fa-map-marker-alt mx-1"></i>
                        <span>{adress}</span>
                    </div>

                    <div className="detail">
                        <i className="fas fa-phone-alt mx-1"></i>
                        <span>{phone}</span>
                    </div>

                    <div className="detail">
                        <i className="fas fa-envelope mx-1"></i>
                        <span>{email}</span>
                    </div>
                </div>

            </div>

            <div className="col-md-2 col-12 d-flex flex-md-column flex-row justify-content-end align-items-md-end align-item-center my-2 my-md-0 gap-2">

                <button onClick={() => handleNavigate()} className="btn btn-primary w-100 w-md-auto" title="Editar">
                    Editar
                </button>

                <button onClick={() => handleDelete()} className="btn btn-danger w-100 w-md-auto" title="Eliminar">
                    Eliminar
                </button>

            </div>
        </div>
    );
};

export default ContactCard;