import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateInputComponent } from '../../../../shared/components/date-input/date-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface AddTodoForm {
  name: FormControl<string>;
  validUntil: FormControl<Date>;
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
    MatButtonModule
  ],
  templateUrl: './add-to-list.component.html',
  styleUrl: './add-to-list.component.scss',
})
export class AddToListComponent {
  @Output() formsData: EventEmitter<{ name: string; validUntil: Date }> =
    new EventEmitter();

  addTodoForm = new FormGroup<AddTodoForm>({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    validUntil: new FormControl(new Date(), { nonNullable: true, validators: [Validators.required] }),
  });

  submit() {
    this.formsData.emit(this.addTodoForm.getRawValue());
  }
}
