import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import CitySlice from './features/CitySlice';
import WeatherSlice from './features/WeatherSlice';
import ForecastSlice from './features/ForecastSlice';
import DebouncedSearchQuerySlice from './features/DebouncedSearchQuerySlice';
import SearchResultsSlice from './features/SearchResultsSlice';
import UserInputSlice from './features/UserInputSlice';

const reducers = combineReducers({
  CitySlice,
  WeatherSlice,
  ForecastSlice,
  DebouncedSearchQuerySlice,
  SearchResultsSlice,
  UserInputSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
