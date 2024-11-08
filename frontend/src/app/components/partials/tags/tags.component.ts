import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  tags?: Tag[];

  constructor(private foodService: FoodService) {
    this.foodService.getAllTags().subscribe({
      next: (serverTags) => {
        this.tags = serverTags;
      },
      error: (error) => {
        console.error('Error fetching tags:', error); // Logs detailed error info
      },
    });
  }
}
