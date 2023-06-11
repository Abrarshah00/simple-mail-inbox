import { configureStore } from "@reduxjs/toolkit";
import filterBySliceReducer from "../slices/filterBySlice";
import selectedTagReducer from "../slices/selectedTagSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  filterBy: filterBySliceReducer,
  selectedTag: selectedTagReducer,
});

const persistreducer = persistReducer(persistConfig, rootReducer);
export default configureStore({
  reducer: persistreducer,
});
