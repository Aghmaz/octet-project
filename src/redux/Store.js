import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import resumeReducer from "../redux/Resume_slice";

// 1️⃣ Combine reducers
const rootReducer = combineReducers({
  resume: resumeReducer,
});

// 2️⃣ Persist config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["resume"], // <-- reducer key, NOT "resumeReducer"
};

// 3️⃣ Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// 5️⃣ Create persistor
export const persistor = persistStore(store);

