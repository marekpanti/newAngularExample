import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ListState } from '../../shared/store/list.store';
import { ListFacadeService } from './services/list-facade.service';
import { AddToListComponent } from './components/add-to-list/add-to-list.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-time-list',
  standalone: true,
  imports: [AddToListComponent, ListComponent],
  providers: [ListState, ListFacadeService],
  templateUrl: './time-list.component.html',
  styleUrl: './time-list.component.scss',
})
export class TimeListComponent implements OnInit, OnDestroy {
  public facade = inject(ListFacadeService)

  ngOnInit(): void {
    this.facade.startBackgroundInterval();
  }

  ngOnDestroy(): void {
    this.facade.stopBackgroundInterval();
  }

  addTodo(event: { name: string; validUntil: Date; userId: number }) {
    this.facade.addItem(event);
  }

  removeTodo(id: string) {
    this.facade.removeItem(id);
  }
}
