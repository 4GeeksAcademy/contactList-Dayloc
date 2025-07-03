import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { createAgenda, getAllAgendas, getContacts } from "../services/fetchs.js";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()  //useGlobalReducer es el hook que me permite utilizar tanto las variables del store como los casos de las acciones
	const { listaAgendas } = store
	const { listaContactos } = store
	const myUser = 'Eduardo88';

	console.log(listaAgendas);
	console.log(listaContactos);

	useEffect(() => {					//useEffect ejecuta funciones nada mas se levante el componente sin necesidad de un disparador como por ejemplo un boton
		getAllAgendas(dispatch);
		handleCreateAgenda();

	}, [dispatch])     //[] de lo que depende la funcion que estoy llamando en el useEffect

	const handleCreateAgenda = async () => {
		const existe = listaAgendas.some((agenda) => agenda.slug === myUser)  		//some => busca si hay algun elemento dentro de la listaAgenda que coincida con el nombre que estoy pasandole			
		console.log(existe);

		if (!existe) {
			getContacts(dispatch, myUser);

		} else {
			createAgenda(myUser);
		}
	}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 