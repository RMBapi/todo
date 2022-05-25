import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem-list',
  templateUrl: './todoitem-list.component.html',
  styleUrls: ['./todoitem-list.component.css'],
})
export class TodoitemListComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}

  ngOnInit(): void {}
}
