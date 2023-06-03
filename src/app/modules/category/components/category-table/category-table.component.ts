import { Component, OnInit } from '@angular/core';
import {
  ICategoryResponse,
  IUsersCategoryResponse,
} from 'src/app/core/models/category.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent implements OnInit {
  public categories!: IUsersCategoryResponse[];

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe((result) => (this.categories = result.categories));
  }
}
