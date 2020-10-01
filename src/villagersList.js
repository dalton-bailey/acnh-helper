import React, { Component } from 'react'
import villagers from '../src/data/acnh.json'

class VillagersFilter extends Component {

    state = {
        sheep: villagers.filter(villager => villager.species === 'Sheep'),
        bird: villagers.filter(villager => villager.species === 'Bird'),
        squirrel: villagers.filter(villager => villager.species === 'Squirrel'),
        showSheep: false,
        showBirds: false,
        showSquirrels: false
    }


    sheepSortHandler = () => {
        const doesShow = this.state.showSheep;
        this.setState({showSheep: !doesShow})

    }

    birdSortHandler = () => {
        const doesShow = this.state.showBirds;
        this.setState({showBirds: !doesShow})
    }

    squirrelSortHandler = () => {
        const doesShow = this.state.showSquirrels;
        this.setState({showSquirrels: !doesShow})
    }

    
    render() {
        return (
            <div className="species">
                <button onClick={this.sheepSortHandler}>Sheep</button>
                <button onClick={this.birdSortHandler}>Birds</button>
                <button onClick={this.squirrelSortHandler}>Squirrels</button>
                { this.state.showSheep === true ? 
                <div>
                    <h1>Sheep</h1>
                    <div className="list">
                    {
                         this.state.sheep.map((shee, index) => {
                            return (
                                <div className="listItem">
                                    <img alt="" src={shee.image_url}></img>
                                    <p>{shee.name}</p>
                                    <p>Personality: {shee.personality}</p>
                                    <p>Birthday: {shee.birthday_day} {shee.birthday_month}</p>
                                    <p>Sign: {shee.sign}</p>
                                </div>
                            )
                         })
                        }
                        </div>
                </div> : null
                }
                {this.state.showBirds === true ?
                <div>
                    <h1>Birds</h1>
                    <div className="list">
                    {
                         this.state.bird.map((bird, index) => {
                            return (
                                <div className="listItem">
                                    <img alt="" src={bird.image_url}></img>
                                    <p>{bird.name}</p>
                                    <p>Personality: {bird.personality}</p>
                                    <p>Name: {bird.birthday_day} {bird.birthday_month}</p>
                                    <p>Sign: {bird.sign}</p>
                                </div>
                            )
                         })
                    }
                    </div>
                </div> : null
                } 
                {this.state.showSquirrels === true ?
                <div>
                    <h1>Squirrels</h1>
                    <div className="list">
                    {
                         this.state.squirrel.map((squirrel, index) => {
                            return (
                                <div className="listItem">
                                    <img alt="" src={squirrel.image_url}></img>
                                    <p>{squirrel.name}</p>
                                    <p>Personality: {squirrel.personality}</p>
                                    <p>Birthday: {squirrel.birthday_day} {squirrel.birthday_month}</p>
                                    <p>Sign: {squirrel.sign}</p>
                                </div>
                            )
                         })
                    }
                    </div>
                </div> : null
                } 
            </div>
        )
    }

}

export default VillagersFilter