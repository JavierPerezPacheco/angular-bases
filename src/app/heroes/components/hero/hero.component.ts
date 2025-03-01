import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public tittle: string = 'Heroes';
  public name: string ='Ironamn';
  public age: number=45;
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeName(): void{
    this.name='Spiderman';
  }
  changeAge():void{
    this.age=30;
  }

  resetForm(): void{
    this.name='Ironman';
    this.age=45;
  }
}
