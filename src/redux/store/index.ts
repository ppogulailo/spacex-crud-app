import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import itemReducer from './items/itemReducer';
import themeReducer from './items/themeReducer';

const rootReducer = combineReducers({
  reducer: itemReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;

export function setupStore(
  preloadedState?: PreloadedState<RootReducer>,
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export default store;
