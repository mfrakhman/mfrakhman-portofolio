const persons = [];

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  setNama(name) {
    this.name = name;
    return this;
  }

  setGender(gender) {
    this.gender = gender;
    return this;
  }

  setTitle() {
    if (this.gender === "L") {
      return (this.name = "Tuan " + this.name);
    } else if (this.gender === "P") {
      return (this.name = "Nyonya " + this.name);
    } else {
      console.log("Gender Unspecific");
    }
  }

  static find(name) {
    return persons.find(item => item.name === name);
  }
}

class Student extends Person {
  setkelas(kelas) {
    this.class = kelas;
    return this;
  }

  setSekolah(sekolah) {
    this.school = sekolah;
    return this;
  }
}

let person1 = new Person();
person1.setNama("mfrakhman").setGender("L").setTitle();
let person2 = new Person();
person2.setNama("mega").setGender("P").setTitle();
let person3 = new Person();
person3.setNama("ichsan").setGender("L").setTitle();
let person4 = new Person();
person4.setNama("Fajar").setGender("L").setTitle();

persons.push(person1, person2, person3, person4);
console.log(persons);

const findPerson = Person.find("Tuan mfrakhman");
console.log(findPerson);

const student = new Student();
student
  .setNama("vandi")
  .setGender("L")
  .setkelas("12")
  .setSekolah("SMA")
  .setTitle();

console.log(student);
