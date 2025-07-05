
const URL_base = 'https://playground.4geeks.com/contact/'

export const getAllAgendas = async (dispatch) => {
    try {
        const response = await fetch(`${URL_base}agendas`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos", response.status);
        }

        const data = await response.json();
        dispatch({                    // gestiona/administra las acciones, es el despachador. paquete de acciones de store.reducer  
            type: 'guardarAgendas',   //type es el tipo/ nombre de la acción que va a hacer, se puede observar en el store
            payload: data.agendas,    // payload es lo que voy a guardar en la variable , lo que mando desde el fetch para que actualice la variable del store 
        })
        return data

    } catch (error) {
        console.log('Error al obtener todas las agendas', error)
    }
}

export const createAgenda = async (slug, dispatch) => {
    try {

        const response = await fetch(`${URL_base}agendas/${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error("Error al crear la agenda", response.status);
        }
        const data = await response.json()
        console.log('Agenda creada exitosamente')
        return data;

    } catch (error) {
        console.log('Error', error)
    }
}

export const deleteContact = async (id, dispatch, slug) => {
    try {
        const response = await fetch(`${URL_base}agendas/${slug}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error("Error al eliminar el contacto", response.status);
        }
        dispatch({

        })

    } catch (error) {
        console.log('Error', error)
    }
}


export const getContacts = async (dispatch, slug) => {
    try {
        const response = await fetch(`${URL_base}agendas/${slug}/contacts`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos", response.status);
        }

        const data = await response.json();
        console.log(data)

        dispatch({                    // gestiona/administra las acciones, es el despachador. paquete de acciones de store.reducer  
            type: 'guardarContactos',   //type es el tipo/ nombre de la acción que va a hacer, se puede observar en el store
            payload: data.contacts,    // payload es lo que voy a guardar en la variable , lo que mando desde el fetch para que actualice la variable del store 
        })
        return data.contacts;

    } catch (error) {
        console.log('Error al obtener todas las agendas', error)
    }







}