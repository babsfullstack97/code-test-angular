import { Component } from '@angular/core';
import { MyService } from '../my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {
  constructor(public myService: MyService) {}

}
