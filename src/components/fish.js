import React, { useEffect, useState } from 'react';
import axios from "axios";

const Fish = () => {
    const[fishesData, setFishesData] = useState({
        fishes: [],
    });

    const fetchFishes = () => {
        axios.get("https://acnhapi.com/v1a/fish").then(function (response) {
            console.log(response)
            setFishesData({
                fishes: response.data
            })
        })
    }

    useEffect(() => {
        fetchFishes();
    }, [])

    return (
        <div className="fish">
            <h1>{fishesData.fishes.length} Fish</h1>
            <div className="list">
                {fishesData.fishes.map((fish) => {
                    return (
                        <div className="listItem">
                            <img alt="" src={fish.icon_uri}/>
                            <p>{fish.name["name-USen"]}</p>
                            <p>Location: {fish.availability.location}</p>
                            <p>Rarity: {fish.availability.rarity}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Fish;