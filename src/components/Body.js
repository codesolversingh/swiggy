import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

  // state variable - super powerful variable..
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [searchRestaurants,setSearchRestaurants] = useState([]);
  
  // set by kushal

  const [showMessage,setShowMessage] = useState(false);

  const [searchText,setSearchText] = useState("");


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

      const json = await data.json();

      //It may showing an error during data fetching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setListOfRestaurants(resData);
      setSearchRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  };


  return listOfRestaurants.length === 0 ?
  ( <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <button onClick={()=>{
              console.log(searchText);
              const searchData = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setSearchRestaurants(searchData);
             
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList =searchRestaurants.filter(res=>res.info.avgRating>4);
          // console.log(filteredList);
          if(filteredList.length == 0){
            setSearchRestaurants(filteredList);
            setShowMessage(true);
          }
          else{
            setSearchRestaurants(filteredList);
          }
 
         
        }}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={() => {
          setShowMessage(false);
          setListOfRestaurants([]); 
          fetchData();        
        }}>
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
       
      {showMessage && (
          <h1>
            Item's not found{" "}
            <span style={{ color: "red"}}>Please click on Show all restaurants</span>
          </h1>
        )}
        {searchRestaurants.map((restaurant) => (
          <Link className="link-decoration" key={restaurant?.info.id} to={"/restaurants/"+ restaurant?.info.id}><RestaurantCard {...restaurant?.info} /></Link>         
        ))}
        
      </div>
    </div>
  );
        
};

export default Body;