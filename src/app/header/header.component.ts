import { Component } from '@angular/core';
import { MyService } from '../my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  constructor(public myService: MyService) {}

 selectFootballer(footballer: { name: string, club: string }) {
    this.myService.selectedFootballer.set(footballer);
 }

}

