import Reducer1 from "./plain_reducer";
import AuthReducer from "./auth_reducer";
import FormReducer from "./form_reducer";
import PostsReducer from "./posts_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer1: Reducer1,
  auth_reducer: AuthReducer,
  user_reducer: UserReducer,
  form_reducer: FormReducer,
  posts_reducer: PostsReducer,
});

export default rootReducer;
