import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    
})
  export class TodoComponent {
     priority = ['1','2','3','4','5'];
    
     model = new Todo('', '','','this.priority[0]');
    
     submitted = false;
    
     onSubmit() { this.submitted = true; }
    
     newTask() {
       this.model = new Todo('', '', '','');
     }
   }
  
   