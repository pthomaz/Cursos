import { Component, OnInit , Input} from '@angular/core';
import {Student} from './studety.model'

@Component({
  selector: 'jad-studenty',
  templateUrl: './studenty.component.html',
  styleUrls: ['./studenty.component.css']
})
export class StudentyComponent implements OnInit {

  @Input() student : Student;
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log(`Student: ${this.student.name}`);
  }
}
