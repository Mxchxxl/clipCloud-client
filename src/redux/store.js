import { persistReducer, persistStore } from "redux-persist";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
