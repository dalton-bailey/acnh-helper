import React, { useContext, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AnimalCrossingContext = createContext({
    bus: [],
    fish: [],
    villagers: [],
})

export const AnimalCrossingContextProvider = (props) => {
    const [bugs, setBugs] = useState([])
    const [fish, setFish] = useState([])
    const [villagers, setVillagers] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <AnimalCrossingContext.Provider value={
            {bugs, fish, villagers}
        }>
            {props.children}
        </AnimalCrossingContext.Provider>
        )
}

export const useAnmialCrossingContext = () => useContext(AnimalCrossingContext)