// import React from 'react';

// const Villagers = ({villagers=[]}) => {
//   return (
//     <>
//     { villagers.map((villager,index) => {
//         if (villager) {
//           return (
//             <div key={villager.id}>
//               <h1>{villager.name["name-USen"]}</h1>
// 	    </div>	
//     	   )	
//     	 }
//     	 return null
//     }) }
//     </>
//   );
// }

// export default Villagers

import React from 'react';

const CountryList = ({countryList=[]}) => {
  return (
    <>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList