import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= "Student Dashboard";
  studentName: string = "";
  grade: string = "";
  students: any = [];
  addStudent(){
    this.students.push({studentName: this.studentName, grade:this.grade})
    this.studentName=""
    this.grade=""
  }
}
