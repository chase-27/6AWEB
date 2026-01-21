import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {

  users: any[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit(): void {
    this.httpClient.getUsersRemotely().subscribe((data: any[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
