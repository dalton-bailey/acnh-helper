import React, { Component } from 'react'
import senateData from '../src/data/senate.json'

// const partyName = members.party === "D" ? 'Democrat': 'Republican'


class Senators extends Component {

state = {
    members: senateData.results[0].members,
    dems:  senateData.results[0].members.filter(member => member.party === 'D'),
    reps:  senateData.results[0].members.filter(member => member.party === 'R'),
    ind:  senateData.results[0].members.filter(member => member.party === 'ID')
}

    senioritySortHandler = () => {
        const newMembers = [...this.state.members]
        const sortedMembers = newMembers.sort((a, b) => {
            return a.seniority - b.seniority

        })

        this.setState({
            members: sortedMembers
        })

    }

    render() {
        return (
            <div className="sens">
                <h1>{this.state.members.length} Senators</h1>
                <h2>Democrats: {this.state.dems.length}</h2>
                <h2>Republicans: {this.state.reps.length}</h2>
                <h2>Independents: {this.state.ind.length}</h2>
                <button onClick={this.senioritySortHandler}>Sort by Seniority</button>
                <div className="list">
                {
                    this.state.members.map((member, index) => {
                        return (
                                <div className="listItem">
                                {member.first_name} {member.last_name}
                                <p>
                                   Party: {member.party}
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