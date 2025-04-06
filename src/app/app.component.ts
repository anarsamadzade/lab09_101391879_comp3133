import { Component } from '@angular/core';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [StudentsComponent]  // Make sure this line is present
})
export class AppComponent {
  title = 'student-app';
}
