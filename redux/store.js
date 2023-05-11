import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cannabisProtectedApi from "../ApiServices/cannabisApi.services";
import { authApi } from "../ApiServices/auth.services";
import authSlice from "./slices/auth.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import inventorySlice from "./slices/inventory.slice";
import marketplaceSlice from "./slices/marketplace.slice";

const rootReducer = combineReducers({
    [cannabisProtectedApi.reducerPath]: cannabisProtectedApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
    inventory: inventorySlice,
    marketplace: marketplaceSlice,
});

const persistConfig = {
    key: "cannabis",
    storage: AsyncStorage,
    whitelist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 1000 },
            serializableCheck: false,
        }).concat(authApi.middleware, cannabisProtectedApi.middleware),
});
