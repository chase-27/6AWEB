import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true
})
export class App implements OnInit {
  protected readonly title = signal('ng-httpclient-demo');
  users: User[] = [];

  constructor(private httpclient: Httpclient) {}

  ngOnInit() {
    this.httpclient.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
