// import React, { Component } from 'react'
import villagerData from './data/acnh.json'
import React from 'react'

const allVillagers = villagerData.map(villager => {
    return {
        name: villager.name,
        personality: villager.personality,
        birthDay: villager.birthday_day,
        birthMonth: villager.birthday_month,
        sign: villager.sign,
        quote: villager.quote,
        imagePath: villager.image_url,
        id: villager.id

    }
})
console.log(allVillagers)


// class Villagers extends Component {

//     render() {
//     return (
//         <div className="villagers">
//             <h1>Villagers</h1>
//             <div className="list">
//                 {
//                     allVillagers.map((villager, index) => {
//                         return (
//                             <div className="listItem">
//                                 <img alt=""  src = {villager.imagePath}></img>
//                                 <p>
//                                     {villager.name}
//                                 </p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// }


function Villagers() {
    return (
        <div className="villagers">
            <h1>Villagers</h1>
            <div className="list">
                {
                    allVillagers.map(villager => {
                        return (
                            <div className="listItem">
                                <img alt="" src= {villager.imagePath}></img>
                                <p>
                                    {villager.name}
                                </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Villagers