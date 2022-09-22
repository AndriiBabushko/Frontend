'use strict'

function Dog(dogName, dogBreed, dogAge) {
    if (!new.target) {
        return new Dog(name);
    }

    this.name = dogName;
    this.breed = dogBreed;
    this.age = dogAge;

    this.dogTalking = () => {
        if (this.age < 1) return 'Тяф'
        if (this.age >= 1 && this.age < 3) return 'Гав';
        if (this.age >= 3) return 'Ррр';
    }
}

let bulldog = new Dog("Archy", "bulldog", 4);
let germanShepherd = new Dog("Ralf", "German shepherd", 2);
let shibaInu = new Dog("Josh", "Shiba inu", 0.5);

alert(`Собака породою ${bulldog.breed} з ім'ям ${bulldog.name} і віком ${bulldog.age} говорить: ${bulldog.dogTalking()}`);
alert(`Собака породою ${germanShepherd.breed} з ім'ям ${germanShepherd.name} і віком ${germanShepherd.age} говорить: ${germanShepherd.dogTalking()}`);
alert(`Собака породою ${shibaInu.breed} з ім'ям ${shibaInu.name} і віком ${shibaInu.age} говорить: ${shibaInu.dogTalking()}`);
