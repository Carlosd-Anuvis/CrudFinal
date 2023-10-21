import axios from 'axios'
import React, {useEffect,useState} from 'react'
import UsuarioIndividual from './UsuarioIndividual'
function ListaUsuario(){

    const[datausuarios, setdatausuario]=useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data)
            setdatausuario(res.data)
           
        }).catch(err => {
            console.log(err)
        })
       
    }, [])

    // Mapear lista de usuarios en objeto de usuarios

    const ListaUsuarios=datausuarios.map(usuario=> {
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )

    })




    return (
        <div>
            <h2>Lista de usuarios</h2>
            <UsuarioIndividual/>
            {ListaUsuario}
    

        </div>
    )
}


export default ListaUsuario