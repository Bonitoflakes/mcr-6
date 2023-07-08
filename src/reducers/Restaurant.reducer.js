export const initialState = {
  activeCuisine: 1,
  restaurants: [],
};

const RestaurantReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_RESTAURANTS":
      return {
        ...state,
        restaurants: payload,
      };

    case "SET_ACTIVE_CUISINE":
      return {
        ...state,
        activeCuisine: payload,
      };

    case "ADD_REVIEW": {
      console.log(payload);

      const updatedReviews = state.restaurants.map((restaurant) => {
        if (restaurant.id === payload.id) {
          return { ...restaurant, ratings: [...restaurant.ratings, payload.review] };
        }
        return restaurant;
      });

      return {
        ...state,
        restaurants: updatedReviews,
      };
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default RestaurantReducer;
