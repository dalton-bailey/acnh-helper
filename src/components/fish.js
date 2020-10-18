import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext"


const Fish = () => {
    const fishesData = useAnmialCrossingContext()


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