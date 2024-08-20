enum StatusCode {
    Success = 200,
    NotFound = 400, 
  }
  
  // Try creating a new Car using the alias provided
  type Name = string
  type GM = boolean
  type Lv = number
  type Character = {
    name:string,
    lv:number,
    gm:boolean
  }
  
  const enterName:Name = "Aamaewa"
  const enterLv:Lv = 69
  const isGm:GM = true
  const char:Character = {
    name:enterName,
    lv:enterLv,
    gm:isGm
  }
  
  
  console.log(char)
  
  
  interface Rectangle {
    heigth: number,
    width: number
  }
  
  class Person {
    name:string="";
    age:number=0;

  }
  
  const person = new Person();
  person.name = "jane"
  person.age = 9
  
  console.log(person.name, person.age)
  
  
  abstract class Animal {
    constructor(public name:string) {}
    abstract makeSound(): void;
    move():void {
      console.log(`${this.name} is moving`);
    }
  }
  
  class Sloth extends Animal {
    makeSound(): void {
      console.log(`${this.name}: ไม่รู้ ไม่รู้`);
    }
  }
  
  class Buffalo extends Animal {
    makeSound(): void {
      console.log(`${this.name}: เดะกุทุ่มด้วยโพเดี้ยม`);
    }
  }
  
  const sloth001 = new Sloth("ประวิทย์");
  const buf001 = new Buffalo("ประยุทธ์");
  
  sloth001.makeSound();
  buf001.makeSound();
  