Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.

Use of Filter can be found in componenets Bugs.js, Fish.js, Creatures.js and Villagers.js to search.

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
