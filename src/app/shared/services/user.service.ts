import { Injectable, computed, inject } from '@angular/core';
import { RootStore } from '../store/root.store';
import { patchState } from '@ngrx/signals';

@Injectable()
export class RootUserService {
  readonly rootStore = inject(RootStore);

  public selectedUser = computed(() => {
    return this.rootStore
      .users()
      .filter((user) => user.id === this.rootStore.selectedUserId())[0];
  });

  public selectUser(id: number) {
    patchState(this.rootStore, { selectedUserId: id });
  }
}
