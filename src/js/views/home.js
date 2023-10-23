import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"

import Card from "../component/Card.jsx"

// import { Link } from "react-router-dom"
export const Home = () => {
	//destrcturing
	const { store } = useContext(Context);
	const { contact } = store;

				return (
					<div className= "container w-50">
						<div className ="row">
							{contact.length <= 0 ?
							<h1>No hay contacto</h1> :
							contact.map((person) =>{
								return <Card key={person.id} person = {person} />;

							} )
							
						}
							
						</div>
					</div>
				);
	};
