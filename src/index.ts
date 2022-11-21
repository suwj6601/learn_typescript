// Basic Types
let id = 5;
let company: string = "Hello World";
let isPublished: boolean = true;

let x: any = "Vu hang";
let age: number;
let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Vu", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Vu"],
  [2, "Hello"],
];

// Union
let pid: string | number = 22;
pid = "id";

// Enum
enum Direction1 {
  Up = 1, // change default = 0 to 1
  Down,
  Left,
  Right,
}

console.log(Direction1.Down); // get index of value

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Down); // get index of value

// Object

type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number; // another syntax

// Funtions
function addNumber(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces

interface UserInterface {
  // readonly id: number; // readonly meaning not change value
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

type Point = number | string;
const p1: Point = 1;

user1.id = 5;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const bard = new Person(1, "Bard");

// Inplement
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(12, "Bard", "Developer");

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Hello", "World"]);

numArray.push(11);
