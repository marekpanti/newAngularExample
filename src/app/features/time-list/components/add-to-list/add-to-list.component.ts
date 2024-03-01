import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateInputComponent } from '../../../../shared/components/date-input/date-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../../../shared/store/models/root.models';

interface AddTodoForm {
  name: FormControl<string>;
  validUntil: FormControl<Date>;
  userId: FormControl<number>;
}

@Component({
  selector: 'app-add-to-list',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DateInputComponent,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './add-to-list.component.html',
  styleUrl: './add-to-list.component.scss',
})
export class AddToListComponent {
  @Input() users: User[];
  @Output() formsData: EventEmitter<{ name: string; validUntil: Date; userId: number }> =
    new EventEmitter();

  addTodoForm = new FormGroup<AddTodoForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    validUntil: new FormControl(new Date(), {
      nonNullable: true,
      validators: [Validators.required],
    }),
    userId: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submit() {
    this.formsData.emit(this.addTodoForm.getRawValue());
  }
}
