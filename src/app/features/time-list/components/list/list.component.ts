import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../../shared/store/models/list.models';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatButtonModule, DatePipe, JsonPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list: Item[];
  @Output() onRemoveItem: EventEmitter<string> = new EventEmitter();

  removeItem(id: string) {
    this.onRemoveItem.emit(id);
  }
}

