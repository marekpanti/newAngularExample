import { signalStore, withState } from '@ngrx/signals';
import { RootState } from './models/root.models';

const initialState: RootState = {
  users: [
    {
      name: 'John',
      title: 'empty',
      id: 1,
    },
    {
      name: 'Suzane',
      title: 'empty',
      id: 2,
    },
  ],
  selectedUserId: 1
};

export const RootStore = signalStore(withState(initialState));
