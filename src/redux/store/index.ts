import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './items/themeReducer';
import itemReducer from './items/itemReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['item'],
};
const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, itemReducer),
  theme: themeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export type RootReducer = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
