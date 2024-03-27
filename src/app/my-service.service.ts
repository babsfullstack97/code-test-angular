import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class MyService {
 footballers = signal([
    { name: "Messi", club: "Barcelona" },
    { name: "Ronaldo", club: "Juventus" },
    { name: "Neymar", club: "PSG" },
 ]);
 selectedFootballer = signal<{ name: string, club: string } | null>(null);
}
