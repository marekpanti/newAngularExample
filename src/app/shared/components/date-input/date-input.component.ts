import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerDirective } from '../calendar/calendar-overlay.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [
    CommonModule,
    DateTimePickerDirective,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateInputComponent),
        multi: true,
    },
],
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() date: Date = new Date();
  @Input() label: string = '';

  touched = false;
  disabled = false;

  onChanged = (date: Date) => {};
  onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  writeValue(value: Date): void {
    this.date = new Date(value);
  }

  setDateValue(date: Date) {
    this.writeValue(date);
    this.onChanged(date);
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
