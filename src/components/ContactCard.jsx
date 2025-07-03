import React from "react";
import rigoBaby from "../assets/img/rigo-baby.jpg";

function ContactCard({ name, adress, phone, email, id, deleted }) {

    return (
        <div>
            <div className="row">

                <div className="contact-card">
                    <img src={rigoBaby} alt="Mike Anamendolla" className="contact-photo mx-5" />

                    <div className="container">
                        <div className="contact-header">
                            <h2 className="contact-name">{name}</h2>

                            <div className="contact-actions">
                                <button className="edit-btn" title="Editar">
                                    <i className="fas fa-pen"></i>
                                </button>

                                <button onClick={() => deleted(id)} className="delete-btn" title="Eliminar">
                                    <i className="fas fa-trash"></i>
                                </button>

                            </div>
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
                </div>
            </div>

        </div>

    );
};

export default ContactCard;