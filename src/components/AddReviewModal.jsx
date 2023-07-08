/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useRestaurant from "../contexts/Restaurant.context";

const initialReviewState = {
  rating: 1,
  comment: "",
  revName: "Rishab",
  pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
};

export const AddReviewModal = ({ toggleModal, restaurantID }) => {
  const { dispatch } = useRestaurant();
  const [newReview, setNewReview] = useState(initialReviewState);

  const onClose = () => {
    toggleModal();
    setNewReview(initialReviewState);
  };

  const onSubmit = () => {
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        id: Number(restaurantID),
        review: newReview,
      },
    });
    toggleModal();
    setNewReview(initialReviewState);
  };

  return (
    <div className="flex min-h-screen w-full justify-center sm:items-center items-end absolute inset-0 backdrop-blur-sm">
      <div className="bg-pink-600 rounded-lg p-8 max-w-xl w-full">
        <button onClick={onClose}>
          <AiOutlineCloseCircle fontSize={32} />
        </button>

        <div className="m-auto">
          <h1 className="text-4xl capitalize font-bold text-center">Add your Review</h1>
          <hr className="mt-4 bg-white" />
        </div>

        <div className="flex justify-between mt-8">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            onChange={({ target }) => setNewReview({ ...newReview, rating: Number(target.value) })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="flex justify-between mt-8">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            onChange={({ target }) => setNewReview({ ...newReview, comment: target.value })}
          />
        </div>

        <div className="flex mt-10">
          <button className="bg-white text-black font-bold px-4 py-2 rounded-lg mx-auto" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
