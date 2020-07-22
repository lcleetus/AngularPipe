import { Component, OnInit } from '@angular/core';
import { Ec2Service } from '../services/ec2.service';
import { ITask } from '../tasks/iTask';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  pageTitle = '';
  currentTaskID = 0;

  constructor( private ec2Serve: Ec2Service)  {}

ngOnInit(): void {
  }

}
