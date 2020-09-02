import React from 'react'
import houseData from '../src/data/house.json'

const reps = houseData.results[0].members.map(member => { 
    return {
        ...member,
        key: member.id
    }
})

const mostGutlessRep = reps.reduce((acc, rep) => {
    const partyName = acc.party === "D" ? 'Democrat' : 'Republican'
    return (acc.votes_with_party_pct) > rep.votes_with_party_pct ? { ...acc, partyName } : { ...rep, partyName }
})


function Representative() {
    return (
        <div className="reps">
            <h1>Representatives</h1>
            <h2>Most Gutless Representative: {mostGutlessRep.first_name} {mostGutlessRep.last_name} votes with the {mostGutlessRep.partyName} party.</h2>
            <div className="list">
            {
                reps.map(rep => {
                  return (
                  <div className="listItem">
                  <p>
                        {rep.first_name} {rep.last_name}
                    </p>
                    <p>
                        Party: {rep.party}
                    </p>
                    <p>
                        State: {rep.state}
                    </p>
                    </div>
                  )
                })
            }
            </div>
        </div>
    )
}

export default Representative