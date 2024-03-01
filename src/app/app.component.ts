import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RootStore } from './shared/store/root.store';
import { RootUserService } from './shared/services/user.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
  ],
  providers: [RootStore, RootUserService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public userService: RootUserService) {}

  selectUser(id: number) {
    this.userService.selectUser(id);
  }
}
