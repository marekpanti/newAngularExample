export interface User {
  name: string;
  title: string;
  id: number;
};

export interface RootState {
  users: User[];
  selectedUserId: number;
};
