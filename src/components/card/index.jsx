import  './Card.module.css'
import { useEffect, useState } from 'react'
import Contcard from '../Contcard'

function Card() {
    const [ api, setapi ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://opentdb.com/api.php?amount=30&category=19')
            const data = await response.json()
            setapi(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
            {api.length > 0 ? (
                    <section>
                        {
                            api.map((api) => (
                                // eslint-disable-next-line react/jsx-key
                                <Contcard crit1={api.category} 
                                crit3={api.correct_answer}>
                                </Contcard>
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </>)
                            
}

export default Card