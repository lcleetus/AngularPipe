import { Component, OnInit } from '@angular/core';
import {ITask} from './iTask';
import {Ec2Service} from '../services/ec2.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  pageTitle = 'ALL TASKS DATA';

  allTasks: ITask[];
  filteredTasks: ITask[] = [];

  selectedFilter = 'title';
  attrListFilter = '';

  constructor(private ec2Serve: Ec2Service) {}

  // event handler for the select element's change event
  selectChange(event: any): void {
    this.selectedFilter = event.target.value;
  }

  // Filter tasks

  get listFilter(): string {
      return this.attrListFilter;
  }

  set listFilter(s: string) {
      this.attrListFilter = s;
      this.filteredTasks = this.attrListFilter ? this.performFilter(this.attrListFilter) : this.allTasks;
  }

  performFilter(filterBy: string): ITask[]{
    if (this.selectedFilter === 'title') {
      filterBy = filterBy.toLocaleLowerCase();
      return this.allTasks.filter((task: ITask) => task.title.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    } else {
      return this.allTasks.filter((task: ITask) => task.id === Number(filterBy));
    }
}


  getTasks(): void{
    this.ec2Serve.getTodos()
    .subscribe(
      response => {
        console.log(response);
        this.allTasks = response;
        this.filteredTasks = response;
      });
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
