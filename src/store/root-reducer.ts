import { type Action, combineReducers } from "redux";

// import slices
import userSliceReducer from "./features/user-slice";
import bannersSliceReducer from "./features/banner-slice";
import instagramFollowReducer from "./features/instagram-follow-slice";
import aboutReducer from "./features/about-slice";
import storyReducer from "./features/story-slice";
import filmsReducer from "./features/films-slice";

export const LOGOUT = "LOGOUT";

const appReducer = combineReducers({
	user: userSliceReducer,
	banners: bannersSliceReducer,
	instagram: instagramFollowReducer,
	about: aboutReducer,
	story: storyReducer,
	films: filmsReducer
});

const rootReducer = (
	state: ReturnType<typeof appReducer> | undefined,
	action: Action,
) => {
	if (action.type === LOGOUT) {
		state = undefined; // resets entire state
	}
	return appReducer(state, action);
};

export default rootReducer;
