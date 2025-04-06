import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  standalone: true,
  imports: [CommonModule]  // Add CommonModule here
})
export class StudentsComponent {
  title: string = "Student List";
  currentDate: string = new Date().toLocaleDateString();
  students: string[] = ['John Doe', 'Jane Smith', 'Alice Johnson'];

  getTitle(): string {
    return `Welcome to the ${this.title} - ${this.currentDate}`;
  }
}
