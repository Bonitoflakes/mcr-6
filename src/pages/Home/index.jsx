import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Listing } from "../../components/Listing";
import { restaurants } from "../../DB/restaurants";
import useRestaurant from "../../contexts/Restaurant.context";

export const Home = () => {
  const { dispatch } = useRestaurant();

  useEffect(() => {
    dispatch({ type: "FETCH_RESTAURANTS", payload: restaurants });
  }, []);

  return (
    <>
      <Header />
      <Listing />
    </>
  );
};
