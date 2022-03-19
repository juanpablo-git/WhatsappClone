import React from 'react'
import './login.css'
import Api from '../Api'

export default ({onRecive})=>{
    
    const handleFaceboobkLogin =async ({onRecive})=>{
            let result = await Api.fbPoPup()
            if(result){
                console.log("CHEGOU AQUI:",result)
                onRecive(result.user)
             }else{
                 alert("Erro!")
             }
    }
    return(
        <div>
            <button onClick={()=>handleFaceboobkLogin({onRecive})}>
                    Facebook
            </button>
        </div>
    )
}