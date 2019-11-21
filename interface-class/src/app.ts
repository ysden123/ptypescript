/*
 * Copyright (c) 2019. Yuriy Stul
 */
import Person from "./Person";
import Student from "./Student";
import Professor from "./Professor";

interface Task{
    name: String; //property
    run(arg: any):void; //method
}

class MyTask implements Task{
    name: String;
    constructor(name: String) {
        this.name = name;
    }

    run(arg: any): void {
        console.log(`running: ${this.name}, arg: ${arg}`);
    }
}

let myTask: Task = new MyTask('someTask');
myTask.run("test");

let personStudent:Person = new Student("Some name", 123);
personStudent.run();

let personProfessor:Person=new Professor("Some professor name", 22, 5);
personProfessor.run();

function pp(person:Person) {
    person.run();
}

pp(personStudent);
pp(personProfessor);