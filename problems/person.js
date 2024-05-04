class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi, I'm ${this.name}.`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if(typeof obj !== 'object') {
      throw new TypeError('method accepts object as argument');
    }
    if(!obj.name && !obj.age) {
      throw new TypeError('Object does not have "name" and "age" properties');
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(obj) {
    let greetings = [];
    for(const person of obj) {
      greetings.push(person.sayHello());
    }

    return greetings;
  }
}

module.exports = Person;
