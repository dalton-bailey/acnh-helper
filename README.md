Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.

Use of Filter can be found in componenets [Bugs.js](src/components/Bugs.js), [Fish.js](src/components/Fish.js), [Creatures.js](src/components/Creatures.js) and [Villagers.js](src/components/Villagers.js) as part of the search functionality.

```
  const showVillagers = villagersData.villagers
    .filter((villager) => {
      return (
        villager.name["name-USen"]
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.personality
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager["birthday-string"]
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.species
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      );
    })
```

Similarly, Map is used in [Bugs.js](src/components/Bugs.js), [Fish.js](src/components/Fish.js), [Creatures.js](src/components/Creatures.js) and [Villagers.js](src/components/Villagers.js) and their associated Current.js to render lists.

```  .map((creature) => {
      return (
        <div key={creature.id} className="listItem">
          <div className="listItemContentSeaCreatures listItemContent">
            <div>
              <img alt={creature.name["name-USen"]} src={creature.icon_uri} />
              <p>{creature.name["name-USen"]}</p>
              <p>
                <AttachMoneyIcon /> {creature.price}
              </p>
            </div>
            <div className="attributes">
              <div className="attribute">
                <SpeedIcon /> <p>{creature.speed}</p>
              </div>
              <div className="attribute">
                <QueryBuilderIcon />
                <p> {creature.availability.time === "" ? "All Day" : creature.availability.time} </p>
              </div>
              <div className="attribute">
                <ExtensionIcon /> <p>{creature.shadow}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
```

Find is used in the [VillagersFav.js](src/components/VillagersFav.js) component to create an array of the Villagers currently living on my island.

```
      const daisy = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Daisy"
      );
      const buck = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Buck"
      );
      const nan = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Nan"
      );
      const stitches = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Stitches"
      );
      const chevre = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Chevre"
      );
      const graham = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Graham"
      )
      const croque = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Croque"
      )
      const carmen = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Carmen"
      )
      const tank = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Tank"
      )
      const claudia = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Claudia"
      )
```

Encapsulate your code as React functional components.

Componenets are encapsualted as function components and can be found in [Components](src/components) folder.

Work with command-line tools and NPM to create and manage your project within a real development toolset.



Allow communication between components using props and the Context API.

[Components](src/context/AnimalCrossingContext.js)

Present a form for user input that provides useful form validation and feedback.

[Form](src/components/Login.js)

Create at least 5 custom components and use it within at least two of your other components.

Bugs, fish, creatures and villagers are all created using 3 components each. A component for all bugs, fish, creatures and villagers, a component for current bigs, fish, creates/fav villagers, and a layout component that structures the two. 

[Bugs Layout](src/components/BugsLayout.js)
[Fish Layout](src/components/FishLayout.js)
[Creatures Layout](src/components/CreaturesLayout.js)
[VillagersLayout](src/components/VillagersLayout.js)

Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.

A small fadeIn animation on the [Scroll](src/components/Scroll.js) button when it appears at the bottom. 

CSS for the Scroll animation

```
/* scroll to top */

.scrollTop {
  position: fixed; 
  width: 100%;
  bottom: 20px;
  align-items: center;
  height: 40px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
}

.scrollTop:hover{
  opacity: 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
```

Connect to a server using HTTP and display retrieved data.

Connected to the Animal Crossing New Horizons API http://acnhapi.com/

[AnimalCrossingContext](src/components/AnimalCrossingContext.js)

```
    useEffect(() => {
        const fetchData = async (dataType) => {
            try {
                const result = await axios.get(`https://acnhapi.com/v1a/${dataType}`)

                const data = await result.data
                
                if (dataType === 'bugs') setBugs(data)
                if (dataType === 'fish') setFishes(data)
                if (dataType === 'villagers') setVillagers(data)
                if (dataType === 'sea') setCreatures(data)

                console.log(result.data)
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchData('bugs')
        fetchData('fish')
        fetchData('villagers')
        fetchData('sea')
        
    }, [])
```

Provide at least 3 different routes with navigation between them using React Router.

React Router is used to route between bugs, fish, creatures and villagers, 

[App](src/components/App.js)

```
function App() {
  return (
    <AnimalCrossingContextProvider>
      <div className="App">
        <Home />
        <Switch>
          <Route path='/fish' component={FishLayout} />
          <Route path='/bugs' component={BugsLayout} />
          <Route path='/seacreatures' component={SeaLayout} />
          <Route path='/villagers' component={VillagersLayout} />
        </Switch>
      </div>
    </AnimalCrossingContextProvider>
  );
}
```

Manage your application's state using Hooks and the Context API.

[AnimalCrossingContext](src/components/AnimalCrossingContext.js)
[AuthContext](src/components/AuthContext.js)


Structure, document, and deploy your final project code according to common industry practices.

Deploying to Neflify https://dgm3790-baileydalton.netlify.app/