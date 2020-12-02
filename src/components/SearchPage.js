// import React, { useState, useEffect } from 'react'
// import SearchBar from './SearchBar'
// import Villagers from './SearchVillagers'

// const SearchPage = (props) => {
//     const [input, setInput] = useState('');
//     const [villagersDefault, setVillagersDefault] = useState();
//     const [villagers, setVillagers] = useState();
  
//     const fetchData = async () => {
//       return await fetch(`https://acnhapi.com/v1a/villagers`)
//         .then(response => response.json())
//         .then(data => {
//            setVillagers(data) 
//            setVillagersDefault(data)
//          });}
  
//     const updateInput = async (input) => {
//        const filtered = villagersDefault.filter(villager => {
//         return villager.name.toLowerCase().includes(input.toLowerCase())
//        })
//        setInput(input);
//        setVillagers(filtered);
//     }
  
//     useEffect( () => {fetchData()},[]);
      
//     return (
//       <>
//         <h1>Villagers</h1>
//         <SearchBar 
//          input={input} 
//          onChange={updateInput}
//         />
//         <Villagers villagers={villagers}/>
//       </>
//      );
//   }
  
//   export default SearchPage

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './SearchVillagers';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CountryList countryList={countryList}/>
    </>
   );
}

export default SearchPage