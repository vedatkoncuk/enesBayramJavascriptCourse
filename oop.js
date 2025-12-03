/* class Insan{
  constructor(){
    console.log('Vedat Koncuk')
  }
}

const insan1 = new Insan(); */


// const insan2 = new Insan(); 

/* class Araba{
  constructor(){
    console.log('')
  }
}
 */


/* class Araba{
  constructor(marka, model, renk, guc){
    this.marka = marka
    this.model = model
    this.renk = renk
    this.guc = guc
  }

  bilgileriGoster(){
    console.log(`Marka: ${this.marka}
Model: ${this.model}
Renk: ${this.renk}
Güç: ${this.guc}`)
  }
}

const araba1 = new Araba('Mercedes', '2025', 'Kirmizi', '1500');
const araba2 = new Araba('Opel', '2021', 'Beyaz', '150');
araba1.bilgileriGoster();
araba2.bilgileriGoster(); */


// let model = araba2.model
// console.log(model)

// console.log(araba2.marka)


/* class Insan{
  static languages = 10;

  constructor(isim, soyİsim, maaş){
    this.isim = isim,
    this.soyİsim = soyİsim,
    this.maaş = maaş,
    this.languages = this.languages
  }
  bilgiGoster(){
    console.log(`İsim: ${this.isim}
      Soyisim: ${this.soyİsim}
      Maaş: ${this.maaş}
      Diller: ${this.languages}`);
  }
}

let insan1 = new Insan('Vedat', 'Koncuk', '10000');
insan1.bilgiGoster();

console.log(Insan.languages) */

// class Person{
//   firstName = 'Vedat'
//   write(){
//     console.log('person sinifina ait',this.firstName);
//   }
// }

// class Student extends Person{
//   write(){
//     console.log('person sinifindan geldi', this.firstName);  
//     super.write();
//   }

// }

// const person = new Person();
// const student = new Student();
// student.write();


/* class Person{
  constructor(firstName, lastName, salary){
    this.firstName = firstName,
    this.lastName = lastName,
    this.salary = salary
  }
  
  showInformation(){
    console.log(this.firstName, this.lastName, this.salary);
  }
}

class Student extends Person{
  constructor(firstName, lastName, salary){
    super(firstName, lastName, salary);
  }

  showInformation(){
    super.showInformation();
  }
}

class Engineer extends Person{
  constructor(firstName, lastName, salary){
    super(firstName, lastName, salary);
  }

  showInformation(){
    super.showInformation();
  }
}

let student1 = new Student('Vedat', 'Koncuk', '10000');
student1.showInformation();

let engineer1 = new Engineer('Cansu', 'Kayik', '10000');
engineer1.showInformation(); */



