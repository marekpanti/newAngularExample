import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() horizontalIndex!: number;
  @Input() isDrag!: boolean;
  @Output() drag = new EventEmitter();
  cells = Array.from(Array(24).keys());
  dropOver = { horizontalIndex: this.horizontalIndex, verticalIndex: 0 };

  constructor(public service: CalendarService) {}

  onMouseUp(verticalIndex: number) {
    console.log(this.isDrag);
    console.log('v podmienke');
    if (this.isDrag) {
      this.service.changeEvent(this.horizontalIndex, verticalIndex);
    }
    this.isDrag = false;
    this.drag.emit(false);
  }

  dragStarted() {
    this.drag.emit(true);
    this.isDrag = true;
    console.log('tutok');
  }

  allowDrop(e: Event, verticalIndex: number) {
    this.dropOver.horizontalIndex = this.horizontalIndex;
    this.dropOver.verticalIndex = verticalIndex;
    console.log(this.dropOver);
    e.preventDefault();
  }
}
