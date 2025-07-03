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

    case 'guardarContactos':
    return{
      ...store,
      listaContactos: action.payloaod
    }

    default:
      throw Error('Unknown action.');
  }    
}
