import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Httpclient } from '../httpclient';
import { User } from './user.model';
@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css'
})
export class Userlist implements OnInit {

  users: User[] = [];

  constructor(private httpclient: Httpclient) {}

  ngOnInit(): void {
    this.httpclient.getUsersRemotely().subscribe(data => {
      this.users = data;
    });
  }
}
