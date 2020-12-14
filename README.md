Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.

Use of Filter can be found in componenets Bugs.js, Fish.js, Creatures.js and Villagers.js as part of the search functionality.

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

Similarly, Map is used in Bugs.js, Fish.js, Creatures.js and Villagers.js and their associated Current.js to render lists.

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

Find is used in the [a relative link](VillagersFav.js) component to create an array of the Villagers currently living on my island.

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
Work with command-line tools and NPM to create and manage your project within a real development toolset.
Allow communication between components using props and the Context API.
Present a form for user input that provides useful form validation and feedback.
Create at least 5 custom components and use it within at least two of your other components.
Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.
Connect to a server using HTTP and display retrieved data.
Provide at least 3 different routes with navigation between them using React Router.
Manage your application's state using Hooks and the Context API.
Structure, document, and deploy your final project code according to common industry practices.
