export const initialStore=()=>{    //initialStore es un almacen global
  return{
    message: null,           
    listaAgendas: [],               // listaAgendas es una variable global que puedo utilizar en cualquier componente haciendo las importaciones correspondientes 
                                    //en este caso se ve una lista de los nombres de las agendas creadas, el get que hice trae nombres e ID 
    listaContactos: [],
                                  }
  }                                 

export default function storeReducer(store, action = {}) {      //store es lo que yo guardo  y action es el nombre de esa accion que voy a guardar
  switch(action.type){
    case 'guardarAgendas':
    return{
      ...store,     //todo el store lo dejas ahi, pero lista de agenda lo actualiza con los datos que vienen del payload
      listaAgendas: action.payload  //guardo en lista de agenda lo que viene del payload 
    }

    // el dispatch tiene el control de los casos(switch) del storeReducer, es el administrador al que el voy a decir el tipo de accion que va a hacer y que va a mandar mediante el payload
    //para modificar la variable de ese caso

    case 'guardarContactos':
    return{
      ...store,
      listaContactos: action.payload
    }

    case 'agregarContacto':
      return{
        ...store,
        contactos: [...store.listaContactos, action.payload]
      }

    case 'eliminarContacto':
      return{
        ...store,
        listaContactos: store.listaContactos.filter((contacto) => contacto.id !== action.payload) 
      }

      case 'actualizarContacto':
        return{
           ...store,
        listaContactos: store.listaContactos.map((contacto) => contacto.id === action.payload.id ? action.payload : contacto)
        }


    default:
      throw Error('Unknown action.');
  }   
   
}
