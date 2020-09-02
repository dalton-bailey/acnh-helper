import React, { Component } from 'react'
import senateData from '../src/data/senate.json'

const members = senateData.results[0].members
const dems = members.filter(member => member.party === 'D')
const reps = members.filter(member => member.party === 'R')
const ind = members.filter(member => member.party === 'ID')

const partyName = members.party === "D" ? 'Democrat': 'Republican'

console.log(members.length)

class Senators extends Component {
    render() {
        return (
            <div className="sens">
                <h1>{members.length} Senators</h1>
                <h2>Democrats: {dems.length}</h2>
                <h2>Republicans: {reps.length}</h2>
                <h2>Independents: {ind.length}</h2>
                <div className="list">
                {
                    members.map((member, index) => {
                        return (
                                <div className="listItem">
                                {member.first_name} {member.last_name}
                                <p>
                                   Party: {member.partyName}
                                </p>
                                <p>
                                   State: {member.state}
                                </p>
                            </div>
                        
                           
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Senators