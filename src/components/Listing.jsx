/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useRestaurant from "../contexts/Restaurant.context";

export const Listing = () => {
  const { state } = useRestaurant();

  const restaurants = state.restaurants.filter((restaurant) => restaurant.cuisine_id === state.activeCuisine);

  //   console.table(restaurants);

  return (
    <div className="mt-6 flex justify-center flex-col items-center">
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const onCardClick = (id) => {
    console.log("clicked restaurant", id);
    navigate(`/restaurants/${id}`);
  };

  return (
    <div className="w-500 my-8" onClick={() => onCardClick(restaurant.id)}>
      <h2 className="text-2xl font-semibold mb-4">Dishes by {restaurant.name}</h2>

      <div className="flex gap-6 flex-wrap ">
        {restaurant.menu.map((dish) => (
          <div key={`${dish.id}-${dish.name}`} className="bg-white rounded-lg shadow-sm shadow-white">
            <div className="w-[300px] h-[250px]">
              <img src={dish.imgSrc} alt={dish.name} className="rounded-t-lg object-cover w-full h-full" />
            </div>

            <div className="flex flex-col px-4 py-2">
              <p className="text-lg text-black font-bold">{dish.name}</p>
              <p className="text-black">
                Rs. {dish.price} for {dish.qty}
              </p>
              <p className="text-black text-xs">{restaurant.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
