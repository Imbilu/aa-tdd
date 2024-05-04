const { expect } = require('chai');
const Person = require('../problems/person');

describe('person class', () => {
    describe('person constructor function', () => {
        it('should have "name" and "age" properties', () => {
            let person = new Person('Don', 5);

            expect(person).to.have.property('name');
            expect(person).to.have.property('age');
        });

        it('should set name and age properties to passed in values', () => {
            let don = new Person('Don', 5);

            expect(don.name).to.eq('Don');
            expect(don.age).to.eq(5);
        });
    });

    describe('sayHello function', () => {
        it("should return a string with the person instance's name and a greeting", () => {
            let joy = new Person('Joy', 21);
            let don = new Person('Don', 50);

            let joyHello = joy.sayHello();
            let donHello = don.sayHello();

            expect(joyHello).to.equal("Hi, I'm Joy.");
            expect(donHello).to.equal("Hi, I'm Don.");
        });
    });

    describe('visit function', () => {
        it("should return a string stating that one person instance visited the passed in person instance", () => {
            let joy = new Person('Joy', 21);
            let don = new Person('Don', 50);

            let visit = joy.visit(don);

            expect(visit).to.equal('Joy visited Don.');
        });
    });

    describe('switchVisit', () => {
        it("should invoke visit function of the parameter with current instance as argument", () => {
            let joy = new Person('Joy', 21);
            let don = new Person('Don', 50);

            let visit = joy.switchVisit(don);

            expect(visit).to.equal('Don visited Joy.');
        });
    });

    describe('update method', () => {

        context('argument is not an object', () => {
            it('should throw a TypeError if argument is not an oject', () => {
                let joy = new Person('Joy', 21);

                let arg1 = 'Don';
                let arg2 = 50;
                let arg3 = true;

                expect(() => joy.update(arg1)).to.throw(TypeError);
                expect(() => joy.update(arg2)).to.throw(TypeError);
                expect(() => joy.update(arg3)).to.throw(TypeError);
            });
        });

        context('the argument is an object', () => {
            it("should update the instance's properties to match passed in object's values", () => {
                let joy = new Person('Joy', 21);

                joy.update({'name': 'Don', 'age': 50});

                expect(joy.name).to.equal('Don');
                expect(joy.age).to.equal(50);
            });

            it("should throw an error if obj does not have name and age properties", () => {
                let joy = new Person('Joy', 21);

                let obj = {'style': 'retro', 'year': 1980};

                expect(() => joy.update(obj)).to.throw(TypeError);
            });
        });
    });

    describe('tryUpdate function', () => {
        context('update succesfully invoked', () => {
            it('should return true if update is succesfully invoked', () => {
                let joy = new Person('Joy', 21);


                let ret = joy.tryUpdate({'name': 'Don', 'age': 50});

                expect(ret).to.equal(true);
                expect(joy.name).to.equal('Don');
                expect(joy.age).to.equal(50);
            });
        });

        context('update not invoked', () => {
            it('should return false if update not successfully invoked', () => {
                let joy = new Person('Joy', 21);

                let arg1 = 'Don';
                let arg2 = 50;
                let arg3 = true;

                let ret1 = joy.tryUpdate({'style': 'retro', 'year': 1980});
                let ret2 = joy.tryUpdate(arg1);
                let ret3 = joy.tryUpdate(arg2);
                let ret4 = joy.tryUpdate(arg3);

                expect(ret1).to.equal(false);
                expect(ret2).to.equal(false);
                expect(ret3).to.equal(false);
                expect(ret4).to.equal(false);
            });
        });
    });

    describe('greetAll function', () => {
        it('should return an array of greeting strings', () => {
            let joy = new Person('Joy', 21);
            let don = new Person('Don', 50);

            let greet = Person.greetAll([joy, don]);

            expect(greet).to.deep.eq(["Hi, I'm Joy.", "Hi, I'm Don."]);
        });
    });
});
