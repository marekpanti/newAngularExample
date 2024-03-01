import { Injectable, effect, inject } from '@angular/core';
import { ListState } from '../../../shared/store/list.store';
import { getState, patchState } from '@ngrx/signals';
import { Statuses } from '../../../shared/store/models/list.models';
import { RootStore } from '../../../shared/store/root.store';

@Injectable()
export class ListFacadeService {
  readonly store = inject(ListState);
  readonly rootStore = inject(RootStore);

  private interval: any;
  // create selectors for example select all valid Items, select all done items

  constructor() {
    effect(() => {
      // 👇 The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('books state changed', state);
    });
  }

  private uuidv4() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c: any) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  }

  public addItem(event: { name: string; validUntil: Date; userId: number }) {
    patchState(this.store, {
      list: [
        ...this.store.list(),
        {
          name: event.name,
          status: Statuses.NOT_STARTED,
          isValid: true,
          validUntil: event.validUntil,
          id: this.uuidv4(),
          userId: event.userId
        },
      ],
    });
  }

  public removeItem(id: string) {
    patchState(this.store, {
      list: [...this.store.list().filter((item) => item.id !== id)],
    });
  }

  public startBackgroundInterval() {
    this.interval = setInterval(() => {
      const now = new Date();
      const expired = this.store.list().map((item) => {
        if (item.validUntil < now) {
          return { ...item, isValid: false };
        }
        return item;
      });
      patchState(this.store, {
        list: [...expired],
      });
    }, 30000);
  }

  public stopBackgroundInterval() {
    clearInterval(this.interval);
  }
}
