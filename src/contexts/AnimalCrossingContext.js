import React, { useContext, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AnimalCrossingContext = createContext({
    bus: [],
    fish: [],
    villagers: [],
    creatures: [],
})

export const AnimalCrossingContextProvider = (props) => {
    const [bugs, setBugs] = useState([])
    const [fishes, setFishes] = useState([])
    const [villagers, setVillagers] = useState([])
    const [creatures, setCreatures] = useState([])

    useEffect(() => {
        const fetchData = async (dataType) => {
            try {
                const result = await axios.get(`https://acnhapi.com/v1a/${dataType}`)

                const data = await result.data
                
                if (dataType === 'bugs') setBugs(data)
                if (dataType === 'fish') setFishes(data)
                if (dataType === 'villagers') setVillagers(data)
                if (dataType === 'sea') setCreatures(data)

                // console.log(result.data)
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchData('bugs')
        fetchData('fish')
        fetchData('villagers')
        fetchData('sea')
        fetchData('fossils')
        
    }, [])

    return (
        <AnimalCrossingContext.Provider value={
            {bugs, fishes, villagers, creatures}
        }>
            {props.children}
        </AnimalCrossingContext.Provider>
        )
}

export const useAnmialCrossingContext = () => useContext(AnimalCrossingContext)