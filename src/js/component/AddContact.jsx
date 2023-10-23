import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		"full_name": "",
		"email": "",
		"agenda_slug": "emilio_agenda",
		"address": "",
		"phone": ""
	})

	const handleChange = (event) => {
		 setContact({
			...contact,
			[event.target.name] : event.target.value
		})

	}

	const handleSubmit = (event) => {
		event.preventDefault()
		actions.createContact(contact)
	}
	return (
		<div className="container justify-content-center m-4 p-3">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label for="name" className="form-label">Nombres</label>
					<input name="full_name" onChange={handleChange} value={contact.full_name} type="text" className="form-control" id="name" placeholder="Nombre Completo" />
				</div>
				<div className="mb-3">
					<label for="name" className="form-label">Dirección</label>
					<input name="address" onChange={handleChange} value={contact.address} type="text" className="form-control" id="address" placeholder="Direccion Completa" />
				</div>
				<div className="mb-3">
					<label for="name" className="form-label">Email</label>
					<input name="email" onChange={handleChange} value={contact.email} type="text" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
				</div>
				<div className="mb-3">
					<label for="name" className="form-label">Telefono</label>
					<input name="phone" onChange={handleChange} value={contact.phone} type="text" className="form-control" id="phone" placeholder="1+123456789" />
				</div>
				<button onSubmit={() => actions.handleSaveContact()} type="submit" className="btn btn-success">Enviar</button>
			</form>
			<div>
				<Link to="/">
					<button className="mt-2 btn btn-primary">Volver al inicio</button>
				</Link>
			</div>
		</div>
	);
};
