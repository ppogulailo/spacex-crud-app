import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ALL_URL_QUERY, searchByOneItem } from '../../../config';
// eslint-disable-next-line import/no-cycle
import {
  IAsyncActionReturn, IFilterLaunches, ISpaceXData, ItemState,
} from '../../../type/types';

export const fetchLaunches = createAsyncThunk<IAsyncActionReturn,
undefined, { rejectValue: string }>(
  'item/fetchLaunches',
  async (_, { rejectWithValue }) => {
    const response = await axios.post(
      ALL_URL_QUERY,
      {
        query: {},
        options: {
          select: ['date_utc', 'details', 'links', 'name', 'success'],
          pagination: true,
          limit: 10,
        },
      },
    );
    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('We can\'t find your launches, please try later!');
  },
);
// Search will correct
export const filterLaunches = createAsyncThunk<IAsyncActionReturn,
IFilterLaunches, { rejectValue: string }>(
  'item/filterLaunches',
  async ({ search, start, end }, { rejectWithValue }) => {
    if (search) {
      const response = await axios.post(
        ALL_URL_QUERY,
        {
          query: {
            date_utc: {
              $gte: `${start}`,
              $lte: `${end}`,
            },
            name: `${search}`,
          },
          options: {
            select: ['date_utc', 'details', 'links', 'name', 'success'],
            pagination: true,
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      }
    } else if (!search) {
      const response = await axios.post(
        ALL_URL_QUERY,
        {
          query: {
            date_utc: {
              $gte: `${start}`,
              $lte: `${end}`,
            },
          },
          options: {
            select: ['date_utc', 'details', 'links', 'name', 'success'],
            pagination: true,
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      }
    }
    return rejectWithValue('We can\'t filter your launches, please try later!');
  },
);

export const addLaunches = createAsyncThunk<IAsyncActionReturn,
IFilterLaunches, { rejectValue: string, state: { reducer: ItemState } }>(
  'item/addLaunches',
  async ({ search, start, end }, { getState, rejectWithValue }) => {
    const { offset, hasNextPage } = getState().reducer;
    if (search && hasNextPage) {
      const response = await axios.post(
        ALL_URL_QUERY,
        {
          query: {
            $text: {
              $search: `${search}`,
            },
            date_utc: {
              $gte: `${start}`,
              $lte: `${end}`,
            },
          },
          options: {
            select: ['date_utc', 'details', 'links', 'name', 'success'],
            offset: `${offset}`,
            limit: 15,
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      }
    } else if (hasNextPage) {
      const response = await axios.post(
        ALL_URL_QUERY,
        {
          query: {
            date_utc: {
              $gte: `${start}`,
              $lte: `${end}`,
            },
          },
          options: {
            select: ['date_utc', 'details', 'links', 'name', 'success'],
            offset: `${offset}`,
            limit: 15,
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      }
    }
    return rejectWithValue('We can\'t filter your launches, please try later!');
  },
);

// onClick Item

export const changeFetch = createAsyncThunk<ISpaceXData, string, { rejectValue: string }>(
  'item/fetchLaunchById',
  async (id, { rejectWithValue }) => {
    const response = await axios.get(searchByOneItem(id));
    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue('We can\'t filter your launches, please try later!');
  },
);
