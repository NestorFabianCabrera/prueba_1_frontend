import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  animal: Animal;

  constructor() {
    this.animal = new Animal('León', 2, 'mamífero');
    this.animal.assignColor(Color.Rojo);

    console.log(this.animal.talk());
    console.log(`El color del animal es ${this.animal.color}`);

    const anotherAnimal = new Animal('Elefante', 25, 'mamífero');
    const sum = this.sumAges(this.animal.age, anotherAnimal.age);
    console.log(`La suma de edades es: ${sum}`);

    const adultAnimal: boolean = this.isAdult(this.animal);
    if (!adultAnimal) {
      console.log(`El ${this.animal.name} es un menorsito`);
    } else {
      console.log(`El ${this.animal.name} es adulto`);
    }

    const animalList = [this.animal, anotherAnimal, new Animal('Drilococo', 2, 'reptil')];
    console.log(`Lista de nombres: ${this.listNames(animalList)}`);

    // Parte de visitantes
    const visitantes = [10, 55, 30, 70];
    console.log(`Visitantes duplicados: ${this.duplyVisitors(visitantes)}`);
    console.log(`Visitantes filtrados (más de 50): ${this.filterVisitors(visitantes)}`);
    console.log(`Total de visitantes: ${this.totalVisitors(visitantes)}`);

    this.saveVisitors(40);
    this.saveVisitors(65);
    console.log('Visitantes guardados:', this.getVisitors());

    // Impresiones parte de nombre del zoo
    const zooName = 'Zoo Imperio de los Simios';
    console.log(`Longitud del nombre: ${this.longNameZoo(zooName)}`);
    console.log(`Nombre en mayúsculas: ${this.convertNameUppercase(zooName)}`);
    console.log(`Subcadena que especifiqué: ${this.extractSubstring(zooName, 4, 25)}`);
    console.log(`Posición de la palabra 'Imperio': ${this.searchSubstring(zooName, 'Imperio')}`);
    console.log(`Nombre dividido en palabras: ${this.splitName(zooName)}`);
    console.log(`Nombre con reemplazo de palabra: ${this.replaceWord(zooName, 'Imperio', 'Legión')}`);
  }

  // Métodos de animales
  sumAges(FirstAge: number, SecondAge: number): number {
    return FirstAge + SecondAge;
  }
  isAdult(animal: Animal): boolean {
    return animal.age >= 4;
  }
  listNames(animals: Animal[]): string[] {
    return animals.map(animal => animal.name);
  }

  // Métodos de visitantes
  duplyVisitors(visitors: number[]): number[] {
    return visitors.map(v => v * 2);
  }
  filterVisitors(visitors: number[]): number[] {
    return visitors.filter(v => v > 50);
  }
  totalVisitors(visitors: number[]): number {
    return visitors.reduce((total, v) => total + v, 0);
  }

  //Almacenamiento en localStorage
  saveVisitors(day: number): void {
    const visitors = this.getVisitors();
    visitors.push(day);
    localStorage.setItem('visitantes', JSON.stringify(visitors));
  }
  getVisitors(): number[] {
    const visitors = localStorage.getItem('visitantes');
    return visitors ? JSON.parse(visitors) : [];
  }


  // Parte de las operacioness con str
  longNameZoo(nameZoo: string): number {
    return nameZoo.length;
  }
  convertNameUppercase(nameZoo: string): string {
    return nameZoo.toUpperCase();
  }
  extractSubstring(nameZoo: string, init: number, end: number): string {
    return nameZoo.substring(init, end);
  }
  searchSubstring(nameZoo: string, substring: string): number {
    return nameZoo.indexOf(substring);
  }
  splitName(nameZoo: string): string[] {
    return nameZoo.split(' ');
  }
  replaceWord(nameZoo: string, original: string, newWord: string): string {
    return nameZoo.replace(original, newWord);
  }
}

enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}

class Animal {
  name: string;
  age: number;
  animalType: string;
  color: Color | undefined;

  constructor(name: string, age: number, animalType: string) {
    this.name = name;
    this.age = age;
    this.animalType = animalType;
  }

  talk(): string {
    return `El ${this.name} es un ${this.animalType}.`;
  }
  assignColor(color: Color): void {
    this.color = color;
  }
}
