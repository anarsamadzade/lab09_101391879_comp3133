import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,   // This line makes it a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, StudentsComponent],   // Add StudentsComponent here
})
export class AppComponent {
  title = 'student-app';
}
