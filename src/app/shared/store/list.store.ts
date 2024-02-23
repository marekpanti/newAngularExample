import { signalStore, withState } from '@ngrx/signals';
import { ListStateModel } from './list.models';

const initialState: ListStateModel = {
  list: [],
  isLoading: false,
};

export const ListState = signalStore(
  withState(initialState)
);
