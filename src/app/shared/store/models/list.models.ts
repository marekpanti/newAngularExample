export interface ListStateModel {
  list: Item[];
  isLoading: boolean;
};

export enum Statuses {
  NOT_STARTED,
  IN_PROGRESS,
  DONE
}

export interface Item {
  name: string;
  id: string;
  isValid: boolean;
  validUntil: Date;
  status: Statuses;
  userId: number;
}
