import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
//import { AccordianTab } from './accordianTab';
import 'rxjs/add/operator/map';

@Component({
  selector: 'accordion',
  template:`
  <div>
        <button (click)="fetchData()">update data</button>
        <app-accordian *ngFor="let user of users"
                       (toggle)="toggle(user)"
                       [extended]="isActive(user)"
                       [title]="user.name">
                      <pre>{{user|json}}</pre>
        </app-accordian>
      </div>

  `,
})
export class Accordion implements OnInit {
  users;
  activeUserId = 0;

  constructor(private http:Http) {
   this.http.get('/app/server/user.json')
   .map(result => result.json())
      .subscribe(result => this.users = result);
  }
  isActive(user){
      return user.id === this.activeUserId;
    }

    fetchData(){
      this.http.get('/app/server/other-users.json')
          .map(result => result.json())
          .subscribe(result => this.users = result);
    }

    toggle(user){
      this.isActive(user) ?
          this.activeUserId = 0 : this.activeUserId = user.id;
    }

  ngOnInit() {}
}
