import { ReactNode } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import store from '../redux/store';

// Props Interface

export interface ICard {
  img: string
  name: string
  info: string
  onCLick: () => void
}

export interface ISearch {
  search: string
  handleDispatch: (arg: string) => void
  register: any
}

interface ILink {
  article: string
  patch: {
    large: string
    small: string
  }
  youtube_id: string
  wikipedia: string
  webcast: string
}

export interface IInfo {
  item: {
    name: string
    date_local: string
    details: string
    links: ILink
    success: boolean
  }
}

export interface IMain {
  children: ReactNode
}

export interface IControl {
  search: string
  dateStart: {
    value: string
    label: string
  } | null
  dateEnd: {
    value: string
    label: string
  } | null
  setFetching: (a: boolean) => void
}

export interface IHeaderProps {
  isDarkTheme: string | boolean
  handleTheme: () => void
}
export interface ISearchForm {
  search: string
}
export interface Option {
  value: string
  label: string
}
// Reducer Interface

export interface ItemState {
  items: ISpaceXData[]
  item: null | ISpaceXData
  search: string
  dateStart: Idata | null
  dateEnd: Idata | null
  isLoading: boolean
  filtedItems: ISpaceXData[]
  offset: number
  hasNextPage: boolean
  error: string | null
}

// Action Interface
export interface ActionChangeString {
  type: string
  payload: string
}

export interface ActionChangeData {
  type: string
  payload: {
    value: string
    label: string
  }
}

export type ActionType = ActionChangeData | ActionChangeString;

// Async Action Interface
export interface IFilterLaunches {
  search: string
  start: string
  end: string
}

export interface ISpaceXData {
  date_local: string
  details: string
  id: string
  date_unix: number
  links: ILink
  name: string
  success: boolean
}

export interface IAsyncActionReturn {
  docs: ISpaceXData[]
  hasNextPage: boolean
  offset: number
  limit: number
}

export interface Idata {
  value: string
  label: string
}

export type AppDispatch = typeof store.dispatch;
export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
