import { Injectable, WritableSignal, signal } from '@angular/core';
import { CalendarEvent } from './models';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public event: WritableSignal<CalendarEvent> = signal({
    horizontalIndex: 0,
    verticalIndex: 0,
    date: new Date(),
    type: 'EMPTY'
  })

  public changeEvent(horizontalIndex: number, verticalIndex: number) {
    this.event.update((event) => {
      const newEvent = event;
      newEvent.horizontalIndex = horizontalIndex;
      newEvent.verticalIndex = verticalIndex;
      return newEvent;
    })
  }
}
