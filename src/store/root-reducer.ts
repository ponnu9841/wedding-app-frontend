import { type Action, combineReducers } from "redux";

// import slices
import userSliceReducer from "./features/user-slice";
import bannersSliceReducer from "./features/banner-slice";

export const LOGOUT = "LOGOUT";

const appReducer = combineReducers({
	user: userSliceReducer,
	banners: bannersSliceReducer,
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
