import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee';
import { CurrencyPipe, DecimalPipe, CommonModule } from '@angular/common';
import { ProductService } from './product';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DecimalPipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ng-services-demo');
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public products: {
    id: string;
    name: string;
    description: string;
    price: number;
  }[] = [];

  constructor(
    private employeeService: EmployeeService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productService.getProducts();
  }

}
