import { initialFavoritsState } from "../../helpers/constants";
import { ADD_FAVORITE } from "./actions";

export default (state = initialFavoritsState, action) => {
    
    const movie = state.movies.find(x => x.id === action?.data?.id);
  switch (action.type) {
      case ADD_FAVORITE:
          state = movie ? {...state}:{ 
              ...state, payload: { count: state.count++, movies: state.movies.push(action.data) }
          };
        break;
  }
  return state
}