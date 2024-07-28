let number: number = 5
let string: string = "string"
let boolean: boolean = true
let arrayNumber: number[] = [5, 10, 15];
let arrayNumber2: Array<number> = [50, 100, 150];

interface Person {
  name: string,
  age: number;
  email?: string | undefined;
}

class Employee implements Person {
  name: string;
  age: number;
  email?: string | undefined;

  constructor(name: string, age: number, email?: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  displayInfo(): void {
    console.log(this.name);
    console.log(this.age);
    if (this.email) {
      console.log(this.email);
    } else {
      console.log("Email undefined");
    }
  }
}


class Box<T> {
  private data: T;
  private name: string;

  constructor(name: string, data: T) {
    this.name = name;
    this.data = data;
  }

  get value(): T {
    return this.data;
  }

  set value(newValue: T) {
    this.data = newValue;
  }

  get boxName(): string {
    return this.name;
  }

  set boxName(newName: string) {
    this.name = newName;
  }
}


const employee = new Employee("Zach", 27)
employee.displayInfo()

const box = new Box("Boxy", null)
console.log(box)
box.boxName = "Box Boy"
console.log(box.boxName)