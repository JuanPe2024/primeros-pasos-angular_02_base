import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //Propiedades
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  //Metodos
  getHeroDescripcion():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    //TODO:
    //throw 'Método no implementado'
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    //this.name = 'ironman';
    this.age = 45;

    //Ciclo de deteccion de cammbios desde dentro de Angular,
    // desde JS puede que no se detecte el control de cambios

    document.querySelectorAll('h1')!.forEach(element=>{
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }

}
