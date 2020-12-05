import React, { useContext, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AnimalCrossingContext = createContext({
    bus: [],
    fish: [],
    villagers: [],
    sea: [],
})

export const AnimalCrossingContextProvider = (props) => {
    const [bugs, setBugs] = useState([])
    const [fishes, setFishes] = useState([])
    const [villagers, setVillagers] = useState([])
    const [sea, setSea] = useState([])

    useEffect(() => {
        const fetchData = async (dataType) => {
            try {
                const result = await axios.get(`https://acnhapi.com/v1a/${dataType}`)

                const data = await result.data
                
                if (dataType === 'bugs') setBugs(data)
                if (dataType === 'fish') setFishes(data)
                if (dataType === 'villagers') setVillagers(data)
                if (dataType === 'sea') setSea(data)

                console.log(result.data)
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchData('bugs')
        fetchData('fish')
        fetchData('villagers')
        fetchData('sea')
        
    }, [])

    return (
        <AnimalCrossingContext.Provider value={
            {bugs, fishes, villagers, sea}
        }>
            {props.children}
        </AnimalCrossingContext.Provider>
        )
}

export const useAnmialCrossingContext = () => useContext(AnimalCrossingContext)