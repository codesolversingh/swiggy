// import { useEffect, useState } from "react";
// import Shimmer from "../Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";

// const RestaurantMenu = ()=>{

//   const {resId} = useParams();
  

//     const [resInfo,SetResInfo] = useState(null);
//     const [infoCards,setInfoCards] = useState(null);
//     useEffect(()=>{
//       fetchMenu();
//     },[])
        
//   const fetchMenu = async () => {
//       const data = await fetch(
//          MENU_API + resId
//         );

//       const json = await data.json();
//       SetResInfo(json.data);
//   };



//   if(resInfo === null)
//   {
//      return <Shimmer/>
//   }
//   // console.log(resInfo);
//   const {name,cuisines,costForTwoMessage} = resInfo?.cards[0].card?.card?.info;

  
//   // const { itemCards } =
//   //   // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   //   resInfo?.cards[2];

//   const x = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//   console.log(x.length);  

//   for (let i = 0; i < x.length; i++) {
//     let checkData = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card.itemCards;
      

//     // if checkData is not undefined then return i
//     if (checkData !== undefined) {
//       setInfoCards(checkData);
//     }
//   }

//   console.log(infoCards);
  
   

//     return(
//       <div className="menu">
//       <h1>{name}</h1>
//       <p>{cuisines.join(",")} - {costForTwoMessage}</p>

//       <h2>Menu</h2>
//       {/* <ul>
//         <li>Kushal Pratap Singh</li>
//         {infoCards.map((item,index) => (
//           <li key={index}>
//             {item.card.info.name} -{" Rs."}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul> */}

//   </div>

        
//     );
// };

// export default RestaurantMenu;