/* eslint-disable prefer-const */
import "./App.css";

console.log("Hello world!!!");
let age: number = 30;
let firstname: string = "Cemil";
const lastname: string = "TÜRE";

console.log(firstname, lastname);

const isPresent: boolean = false;
console.log(isPresent);

age = 32;

console.log(age);

let firstNames: string[] = ["ali", "veli", "kamil"];

console.log(firstNames);

let fruits: string[] = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
let values: (string | number)[] = [1, 2, "elma", "armut", true];
console.log(values);

console.log(values[2]);

//tuple
let instructor: [number, string] = [1, "Can"]; //sırasıyla olması gereken tipleri gösteriyor

let user: [number, string, boolean, number, string] = [
  1,
  "Cemil",
  true,
  7,
  "Türe",
];

let empl: [number, string][] = [
  [1, "Ali"],
  [2, "Veli"],
  [3, "Şakir"],
];
console.log(instructor, user, empl);

//object

let object: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
object = {
  firstName: "Cemil",
  lastName: "Türe",
  age: 30,
  jobTitle: "Frontend Developer",
};

console.log(object);

//enum
enum Media {
  Newspaper, //normalde 0 dan başlar ama =1 deyip başlangıç değerini değiştirebiliriz ya da karşılarına yine = deyip farklı bir değer string number vs atayabiliriz
  Newsletter,
  Magazine,
  Book,
}
console.log(Media.Magazine);
console.log(Media[2]);

//union
let code: (string | number | boolean | object)[]; //bu tiplerden herhangi biri olabilir
code = ["Cemil", 22, true, { lastname: "Türe" }];
console.log(code);

//any
let someThing: any = "Hello";
someThing = 45;
someThing = true;
someThing = { firstName: "Cemil", lastName: "Türe" };
someThing = ["Ali", 49, false, { nickName: "Şakir" }];

console.log(someThing);

//void

function sayHello(): void {
  // let can = "Can";   voidden dolayı bir şey return edemiyoruz
  // return can;
  console.log("Hi");
}
sayHello();

//never
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }

// throwError("Hata"); //never herhangi bir şey çıktı alınmasına izin vermiyor hata mesajı olarak veriyor

// let something: void = null; void null ve undefined değerlierinin atanmasına izin veriyor ama never null ve undefined a da izin vermiyor
// let nothing: never = null;

//type inference
let qwqw = 0;
console.log(typeof qwqw); //typeof değerin tipini geri döndürüyor

function increment(counter: number) {
  return ++counter;
}
let inc = increment(45);
console.log(inc);

//type assertation
// interface Employee {
//   name: string;
//   code: number;
// }

// const employee = <Employee>{}; type assertation <> bu şekilde yapılıyor
// console.log(typeof employee);
// employee.name = "cemil";
// employee.code = 1;
// console.log(employee);

//if else
let x: number = 15;
let y: number = 25;
if (x < y) {
  console.log("x y den küçüktür");
} else if (x == y) {
  console.log("x y ye eşittir");
} else {
  console.log("x y den büyüktür");
}

//ternary operator
x < y
  ? console.log("x y den küçüktür")
  : x > y
  ? console.log("x y den büyüktür")
  : console.log("x y ye eşittir");

//switch case
let day: number = 0;
switch (day) {
  case 0:
    console.log("Pazar");

    break;
  case 1:
    console.log("Pazartesi");

    break;
  case 2:
    console.log("Salı");

    break;
  case 3:
    console.log("Çarşamba");

    break;
  case 4:
    console.log("Perşembe");

    break;
  case 5:
    console.log("Cuma");

    break;
  case 6:
    console.log("Cumartesi");

    break;

  default:
    console.log("Lütfen 0 ile 6 arasında bir değer giriniz");

    break;
}

//for loop

for (let a = 0; a < 3; a++) {
  console.log(a);
}

let array = [10, 20, 30, 40, 50];

for (const iterator of array) {
  //dizideki elemanları sırasıyla yazdırıyor
  console.log(iterator);
}

let ct = "Cemil TÜRE";
for (const parca of ct) {
  //harfleri veya sayıyı tek tek yazdırıyor of yerine in kullanılırsa elemanların indexini veriyor
  console.log(parca);
}

//while loop
let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
  if (counter == 3) {
    break;
  }
}

//do while

do {
  //do kısmı herhangi bir şarta bağlı kalmaksızın çalışıyor
  console.log(counter);
  counter++;
} while (counter < 5);

function add(a: number, b: number): number {
  //sondaki number çıktının type ını belirtiyor
  return a + b;
}
let toplam = add(10, 20); //console.log(add(10, 20)); yandaki kodlarla aynı işi yapıyor
console.log(toplam);

function print(): void {
  // voidden dolayı return hata veriyor
  console.log("Cemil Türe void");
  return 35;
}
let bas = print();
console.log(bas);

function birlestir(
  ad: string,
  soyad: string = "Türe" /*bu şekilde başlangıç değeri atayabiliyoruz*/
): string {
  return ad + " " + soyad;
}

let bir = birlestir("Şakir", "Yılmaz"); //ikinci değeri vermezsem başlangıç değeri geçerli oluyor ama verirsem son verdiğim değer geçerli oluyor
console.log(bir);

//function optional parameter

function carpma(a: number, b: number, c?: number) {
  return typeof c !== "undefined" ? a * b * c : a * b;
  // if (typeof c !== "undefined") {
  //   return a * b * c;
  // } else {
  //   return a * b;
  // }
}

let carp = carpma(3, 4);
console.log(carp);

let carpan = (a: number, b: number) => {
  return a * b;
};
console.log(carpan(7, 6));

let arrow = () => {
  console.log("arrow function");
};
arrow();

//function overloading
function toplama(a: string, b: string): string;
function toplama(a: number, b: number): number;
function toplama(a: any, b: any) {
  return a + b;
}
let topla = toplama("TypeScript", " öğreniyorum");
console.log(topla);

//rest parameters
function hepsiniTopla(a: string, ...numbers: number[]) {
  let total = 0;
  numbers.forEach((num) => (total += num));
  console.log(a);

  return total;
}
console.log(hepsiniTopla("Cemil", 10, 20, 40));

function yaziBirlestir(a: string, ...names: string[]) {
  console.log(a, " " + names.join(", ")); //join aralardaki karakteri belirtmek için kullanılıyor
}
yaziBirlestir("Merhaba", "Cemil", "Kamil", "Ali", "Veli");

//class   / access modifiers /readonly
class Person {
  public readonly id: number; //boş bırakırsam da default olarak tanım publictir her yerden erişmeye sağlar //readonly ise daha sonra değiştirmeye izin vermez
  protected firstName: string; //class dışından erişime izin vermez ancak alt sınıflardan veriye erişilebilir
  private lastName: string; //class dışından erişime izin vermez

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let personInfo = new Person(64, "Cemil", "Türe");
console.log(personInfo.getFullName());
// personInfo.id = 5; id nin başına readonly yazdığımız için değiştirmek istediğimizde hata veriyor
console.log(personInfo.id);

//inheritance
class subPerson extends Person {
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}
let sub = new subPerson(999, "Kemal", "Ateş");
console.log(sub.getFullName());

//static methods
class Circle {
  static pi: number = 3.14;
  pi = 3;

  constructor() {
    Circle.pi++; //yeni bir alt sınıf tanımlayınca 3 olarak tanımladığımız pi değil static teki pi etkileniyor,alt sınıflar da static i etkiliyor
  }

  static hesapla(yaricap: number) {
    return this.pi * yaricap * yaricap;
  }
}
let objem = new Circle();
let objem2 = new Circle();

console.log(objem.pi);

console.log(Circle.pi);
console.log(Circle.hesapla(5));

// abstract class
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void;

  abstract generateReports(): void;
}

//abstract classların tek başına new instance ını alamazsınız
//fakat reference verebilirsiniz
//abstract class içinde abstract metodları mutlaka extend ettiğiniz class ta implemente
//etmeniz lazım

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

//interface //optional parameter
interface Iperson {
  firstName: string;
  middleName?: string; //burayı optional olarak tanımladık
  lastName: string;
  age: number;
}

function getName(person: Iperson) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName} ${person.age}`;
  }
  return `${person.firstName} ${person.lastName} ${person.age}`;
}

let person = {
  firstName: "Deniz",
  lastName: "Yılmaz",
  age: 42,
  middleName: "Can",
};

console.log(getName(person));

//interface function type
interface IstringFormat {
  (str: string, isUpper: boolean): string;
}

let stringFormat: IstringFormat = function (str: string, isUpper: boolean) {
  return isUpper ? str.toUpperCase() : str.toLowerCase();
};

console.log(stringFormat("büyük harf yap", true));
console.log(stringFormat("KÜÇÜK HARF YAP", false));

//interface imlement etme
interface IMain {
  name: string;
  gender: string;
}

interface IEmployee extends IMain {
  empNumber: number;
}

interface IDepartment extends IMain {
  empDepartmen: string;
}

let emp: IEmployee = {
  name: "Cemil",
  gender: "Male",
  empNumber: 1,
};

let deprtmnt: IDepartment = {
  name: "Cemil",
  gender: "Male",
  empDepartmen: "Software department",
};

console.log(emp);
console.log(deprtmnt);

//class a interface imlement etme
// interface IPerson {
//   name: string;
//   gender: string;
// }

// class Employee implements IPerson {
//   empNumber: number;
//   name: string;
//   gender: string;
//   constructor(empNumber: number, name: string, gender: string) {
//     this.empNumber = empNumber;
//     this.name = name;
//     this.gender = gender;
//   }
// }

// let employee = new Employee(5, "Can", "Male");
// console.log(employee);

//type intersection
interface IBusinessPartner {
  name: string;
  credit: number;
}

interface IContact {
  email: string;
  phone: string;
}

//  type interfaceBirlestir=IBusinessPartner&IContact; bu şekilde de yapabiiriz sonrasında tipimizi :interfaceBirlestir olarak ayarlarız

let kisim: IBusinessPartner & IContact = {
  name: "type intersection",
  credit: 5465153,
  email: "asdasdqwe@dssad.com",
  phone: "1231231232134",
};

console.log(kisim);

//type guard
type tip = string | number;
function ekle(a: tip, b: tip) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Lütfen doğru formatta veri gönderin");
}

console.log(ekle("type", "guard"));

//type guard instanceof
class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further";
  }

  return message;
}

//generics
// function getRandomNumber(items: number[]): number {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// let sayilar = [3, 56, 895, 451, 5612, 56];
// console.log(getRandomElement(sayilar));

// function getRandomString(items: string[]): string {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// let yazilar = ["şakir", "önder", "kamil", "yalın", "adem", "mehmet"];
// console.log(getRandomElement(yazilar));

// function getRandomElement<T>(items: <T>[]): T {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

function App() {
  return <>Hello World! I am learning TypeScript</>;
}

export default App;
