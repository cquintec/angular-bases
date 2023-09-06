import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 41;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDezcription(): string{
    return `${this.name } - ${ this.age }`;
  }

  changeHero(): void{
    this.name='Pepeman';
  }

  changeAge(): void {
    this.age=900;
  }

  resetForm(): void {
    this.age=41;
    this.name='Ironman';
  }


}
