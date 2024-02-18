import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ColumnComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  columns = Array.from(Array(7).keys());
  x = 0;
  y = 0;
  dragStarted = false;

  @ViewChild('calendar') calendar!: ElementRef<HTMLElement>;
  @ViewChild('movable') movable!: ElementRef<HTMLElement>;
  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    console.log(e);
    if (e && this.dragStarted) {
      this.x = e.pageX - 40;
      this.y = e.pageY - 140;
      this.movable.nativeElement.style.left = this.x + 'px';
      this.movable.nativeElement.style.top = this.y + 'px';
    }
  }

  onDragChange(isDrag: boolean) {
    console.log('tu', isDrag)
    this.dragStarted = isDrag;
  }
}
