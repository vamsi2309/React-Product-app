import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userLogin from "./slice/userLogin";

import darkMode from "./slice/darkMode";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  darkMode: darkMode,
  userLogin: userLogin,
});
export { rootPersistConfig, rootReducer };
