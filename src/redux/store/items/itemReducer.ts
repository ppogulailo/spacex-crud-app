import { AnyAction, createSlice } from '@reduxjs/toolkit';
import {
  ActionChangeData, ActionChangeString, ItemState, PendingAction,
} from '../../../type/types';
import {
  addLaunches, changeFetch, fetchLaunches, filterLaunches,
} from '../asyncActions/asyncAcrions';

function isError(action: AnyAction) {
  return action.type.endsWith('/rejected');
}

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}

const initialState: ItemState = {
  items: [],
  item: null,
  search: '',
  dateStart: null,
  dateEnd: null,
  isLoading: false,
  filtedItems: [],
  offset: 10,
  hasNextPage: true,
  error: null,
};
const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changeSearch(state, action: ActionChangeString) {
      state.search = action.payload;
    },
    changeDataStart(state, action: ActionChangeData) {
      state.dateStart = action.payload;
    },
    changeDataEnd(state, action: ActionChangeData) {
      state.dateEnd = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeFetch.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        if (state?.items[0]?.id !== action.payload.docs[0].id) {
          state.items = [...state.items, ...action.payload.docs];
        }
        state.filtedItems = state.items;
      })
      .addCase(filterLaunches.fulfilled, (state, action) => {
        if (action.payload) {
          state.filtedItems = action.payload.docs;
          state.hasNextPage = action.payload.hasNextPage;
        }
      })
      .addCase(addLaunches.fulfilled, (state, action) => {
        if (action.payload.docs[0]) {
          state.offset += 5;
        }
        state.items = [...state.filtedItems, ...action.payload.docs];
        state.hasNextPage = action.payload.hasNextPage;
        state.filtedItems = state.items;
      })

      .addMatcher(isError, (state, action) => {
        state.error = action.error.message;
      })
      .addMatcher(isPendingAction, (state) => {
        state.error = null;
        state.isLoading = true;
      });
  },
});

export const { changeSearch, changeDataStart, changeDataEnd } = itemSlice.actions;

export default itemSlice.reducer;
