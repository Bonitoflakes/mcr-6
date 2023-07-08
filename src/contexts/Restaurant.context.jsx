import { useReducer, createContext } from "react";
import RestaurantReducer, { initialState } from "../reducers/Restaurant.reducer";
import { useContext } from "react";

const Restaurantcontext = createContext(null);

// eslint-disable-next-line react/prop-types
export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RestaurantReducer, initialState);
  const value = { state, dispatch };

  return <Restaurantcontext.Provider value={value}>{children}</Restaurantcontext.Provider>;
};

const useRestaurant = () => {
  const context = useContext(Restaurantcontext);
  if (!context) throw new Error("useContext must be used within a Provider");
  return context;
};

export default useRestaurant;
