import React, { Component } from 'react'
import villagers from '../src/data/acnh.json'

class VillagersFilter extends Component {

    state = {
        sheep: villagers.filter(villager => villager.species === 'Sheep'),
        bird: villagers.filter(villager => villager.species === 'Bird'),
        squirrel: villagers.filter(villager => villager.species === 'Squirrel'),
        pig: villagers.filter(villager => villager.species === 'Pig'),
        cub: villagers.filter(villager => villager.species === 'Cub'),
        alligator: villagers.filter(villager => villager.species === 'Alligator'),
        koala: villagers.filter(villager => villager.species === 'Koala'),
        eagle: villagers.filter(villager => villager.species === 'Eagle'),
        anteater: villagers.filter(villager => villager.species === 'Anteater'),
        penguin: villagers.filter(villager => villager.species === 'Penguin'),
        bull: villagers.filter(villager => villager.species === 'Bull'),
        mouse: villagers.filter(villager => villager.species === 'Mouse'),
        cat: villagers.filter(villager => villager.species === 'Cat'),
        horse: villagers.filter(villager => villager.species === 'Horse'),
        hamster: villagers.filter(villager => villager.species === 'Hamster'),
        kangaroo: villagers.filter(villager => villager.species === 'Kangaroo'),
        wolf: villagers.filter(villager => villager.species === 'Wolf'),
        chicken: villagers.filter(villager => villager.species === 'Chicken'),
        elephant: villagers.filter(villager => villager.species === 'Elephant'),
        lion: villagers.filter(villager => villager.species === 'Lion'),
        deer: villagers.filter(villager => villager.species === 'Deer'),
        dog: villagers.filter(villager => villager.species === 'Dog'),
        tiger: villagers.filter(villager => villager.species === 'Tiger'),
        bear: villagers.filter(villager => villager.species === 'Bear'),
        cow: villagers.filter(villager => villager.species === 'Cow'),
        hippo: villagers.filter(villager => villager.species === 'Hippo'),
        duck: villagers.filter(villager => villager.species === 'Duck'),
        ostrich: villagers.filter(villager => villager.species === 'Ostrich'),
        rabbit: villagers.filter(villager => villager.species === 'Rabbit'),
        gorilla: villagers.filter(villager => villager.species === 'Gorilla')
    }

    sheepSortHandler = () => {
       const newSheep = this.state.sheep.map((shee, index) => {
           return {
               imagePath: shee.image_url,
               birthDay: shee.birthday_day,
               birthMonth: shee.birthday_month,
               sheepName: shee.name,
               sheepSign: shee.sign,
               sheepPersonality: shee.personality
           }
        })

        this.setState({
            sheep: newSheep
        })

        console.log(newSheep)

    }

    birdSortHandler = () => {
        const newBirds = this.state.bird.map((bird, index) => {
            return {
                imagePath: bird.image_url,
                birthDay: bird.birthday_day,
                birthMonth: bird.birthday_month,
                birdName: bird.name,
                birdSign: bird.sign,
                birdPersonality: bird.personality
            }
        })

        this.setState({
            bird: newBirds
        })
    }


    
    render() {
        return (
            <div className="species">
                <button onClick={this.sheepSortHandler}>Sheep</button>
                <button onClick={this.birdSortHandler}>Birds</button>

                <div className="list">
                    {
                         this.state.sheep.map((shee, index) => {
                            return (
                                <div className="listItem">
                                    <img alt="" src={shee.imagePath}></img>
                                    <p>{shee.sheepName}</p>
                                    <p>{shee.sheepPersonality}</p>
                                    <p>{shee.birthDay} {shee.birthMonth}</p>
                                    <p>{shee.sheepSign}</p>
                                </div>
                            )
                         })
                    }
                </div>
                <div className="list">
                    {
                         this.state.bird.map((bird, index) => {
                            return (
                                <div className="listItem">
                                    <img alt="" src={bird.imagePath}></img>
                                    <p>{bird.birdName}</p>
                                    <p>{bird.birdPersonality}</p>
                                    <p>{bird.birthDay} {bird.birthMonth}</p>
                                    <p>{bird.birdSign}</p>
                                </div>
                            )
                         })
                    }
                </div>
            </div>
        )
    }

}
export default VillagersFilter