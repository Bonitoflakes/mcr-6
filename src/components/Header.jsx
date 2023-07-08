import cuisuines from "../DB/cuisines";
import useRestaurant from "../contexts/Restaurant.context";

export const Header = () => {
  const { state, dispatch } = useRestaurant();
  const activeCuisine = state.activeCuisine;

  const onButtonClick = (id) => {
    console.log("clicked", id);
    dispatch({ type: "SET_ACTIVE_CUISINE", payload: id });
  };

  return (
    <nav>
      <h1 className="text-6xl font-bold text-center my-8">Food Ordering App</h1>

      <h1 className="text-3xl font-semibold text-center my-4">Select your cuisine:</h1>

      <div className="flex items-center justify-center gap-4">
        {cuisuines.map(({ id, name }) => {
          const isActive = id === activeCuisine;

          return (
            <button
              onClick={() => onButtonClick(id)}
              className={`px-4 py-2 border-2 border-solid border-pink-600 rounded-lg bg-pink-500 capitalize ${
                isActive && "bg-violet-500"
              }`}
              key={`cuisine-${id}`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
