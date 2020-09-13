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

    
    
    render() {
        return (
            <div className="species">
                <button onClick>Sheep: {this.state.sheep.length} </button>
                <button onClick>Birds: {this.state.bird.length} </button>
                <button onClick>Squirrels: {this.state.squirrel.length} </button>
                <button onClick>Pigs: {this.state.pig.length} </button>
                <button onClick>Cubs: {this.state.cub.length} </button>
                <button onClick>Alligator: {this.state.alligator.length} </button>
                <button onClick>Koalas: {this.state.koala.length} </button>
                <button onClick>Eagles: {this.state.eagle.length} </button>
                <button onClick>Anteaters: {this.state.anteater.length} </button>
                <button onClick>Penguins: {this.state.penguin.length} </button>
                <button onClick>Bulls: {this.state.bull.length} </button>
                <button onClick>Mice: {this.state.mouse.length} </button>
                <button onClick>Cats: {this.state.cat.length} </button>
                <button onClick>Horses: {this.state.horse.length} </button>
                <button onClick>Hamsters: {this.state.hamster.length} </button>
                <button onClick>Kangaroos: {this.state.kangaroo.length} </button>
                <button onClick>Wolves: {this.state.wolf.length} </button>
                <button onClick>Chickens: {this.state.chicken.length} </button>
                <button onClick>Elephants: {this.state.elephant.length} </button>
                <button onClick>Lions: {this.state.lion.length} </button>
                <button onClick>Deer: {this.state.deer.length} </button>
                <button onClick>Dogs: {this.state.dog.length} </button>
                <button onClick>Tigers: {this.state.tiger.length} </button>
                <button onClick>Bears: {this.state.bear.length} </button>
                <button onClick>Cows: {this.state.cow.length} </button>
                <button onClick>Hippos: {this.state.hippo.length} </button>
                <button onClick>Ducks: {this.state.duck.length} </button>
                <button onClick>Ostrichs: {this.state.ostrich.length} </button>
                <button onClick>Rabbits: {this.state.rabbit.length} </button>
                <button onClick>Gorillas: {this.state.gorilla.length} </button>


            </div>
        )
    }
}

export default VillagersFilter