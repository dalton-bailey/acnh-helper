import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const Fish = () => {
    const[fishesData, setFishesData] = useState({
        fishes: [],
    });

    useEffect(() => {
        const fetchFishes = () => {
            axios.get("https://acnhapi.com/v1a/fish").then(function (response) {
                console.log(response)
                setFishesData({
                    fishes: response.data
                })
            })
        }
        fetchFishes();
    }, [])

    return (
        <div className="fish">
            <h1>{fishesData.fishes.length} Fish</h1>
            <div className="list">
                {fishesData.fishes.map((fish) => {
                    return (
                        <div key={fish.id} className="listItem">
                        <div>
                            <img alt="" src={fish.icon_uri}/>
                            <p>{fish.name["name-USen"]}</p>
                            <p><AttachMoneyIcon />{fish.price}</p>
                        </div>
                        <div>
                        <p><LocationOnIcon />{fish.availability.location}</p>
                        <p><QueryBuilderIcon /> {fish.availability.time}</p>

                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Fish;