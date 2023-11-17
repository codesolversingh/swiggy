import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  totalRatingsString
  }) => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/735e039e100fd4631f26dd07f986e074"
        src={CDN_URL + cloudinaryImageId}
        alt="reslogo"
      />
      {/* <h3>{name}</h3> */}
      <h3>{name.slice(0, 13)}</h3>
      {/* <h4> {cuisines.join(", ")}</h4> */}
      <h4> {cuisines.slice(0, 4).join(", ")} </h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;