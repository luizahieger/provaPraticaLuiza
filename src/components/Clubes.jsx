import { useState, useEffect } from "react"
export default function Clubes(){
    const [clube, setClube] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch (`https://api.cartola.globo.com/clubes`)
            const data = await response.json()
            setClube(data)
        }catch(error){
            console.error(error)
        }
    }

    return(
        
        <div>
 {clube && (
                <div>
                    <p>{clube.nome}</p>
    
                </div>
            )}
        </div>   
)}
