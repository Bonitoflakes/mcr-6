/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useRestaurant from "../../contexts/Restaurant.context";

import { HiArrowLeft, HiOutlineStar } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { AddReviewModal } from "../../components/AddReviewModal";
import { useState } from "react";

export const Restaurant = () => {
  const { restaurantID } = useParams();
  const { state } = useRestaurant();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const restaurant = state.restaurants.find((restaurant) => restaurant.id === Number(restaurantID));
  const menu = restaurant.menu.map((item) => item.name).join(", ");

  const goBack = () => navigate("/");
  const toggleModal = () => setIsModalOpen((p) => !p);

  return (
    <>
      <button className="absolute top-5 left-8" onClick={goBack}>
        <HiArrowLeft fontSize={38} />
      </button>
      <RestaurantInfo
        menu={menu}
        restaurant={restaurant}
        ratings={restaurant.ratings}
        toggleModal={toggleModal}
      />
      {isModalOpen && <AddReviewModal toggleModal={toggleModal} restaurantID={restaurantID} />}
    </>
  );
};

const RestaurantInfo = ({ menu, restaurant, ratings, toggleModal }) => {
  const avgRating = (ratings.reduce((acc, curr) => acc + curr.rating, 0) / restaurant.ratings.length).toFixed(1);

  return (
    <>  
      <div className="max-w-[800px] mx-auto mt-8">
        <div className=" flex items-center justify-between">
          <div className="">
            <h1 className="text-5xl font-semibold mb-1">{restaurant.name}</h1>
            <p>{menu}</p>
            <p>{restaurant.address}</p>
            <p>Average Rating: {avgRating}</p>
          </div>

          <button
            className="px-4 py-2 border-2 border-solid border-pink-600 rounded-lg bg-pink-500 capitalize"
            onClick={toggleModal}
          >
            Add Review
          </button>
        </div>
        <hr className="mt-4 bg-white" />
        <Reviews ratings={ratings} />
      </div>
    </>
  );
};

const Reviews = ({ ratings }) => {
  return (
    <div className="my-6">
      <h1 className="text-3xl font-semibold">Reviews</h1>

      <div className="">
        {ratings.map(({ rating, comment, revName, pp }) => {
          return (
            <div key={revName} className="my-8">
              <div className="flex justify-between my-2">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full">
                    <img src={pp} alt={revName} className="rounded-full" />
                  </div>

                  <h3>{revName}</h3>
                </div>

                <div className="bg-green-800 rounded-xl px-2 flex items-center gap-1">
                  <p className="text-lg text-yellow-600 font-bold">{rating}</p>
                  <span className="pb-2 self-end">
                    <HiOutlineStar fontSize={13} className="text-yellow-600 " />
                  </span>
                </div>
              </div>

              <p>{comment}</p>
              <hr className="mt-4 bg-white" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
