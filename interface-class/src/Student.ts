/*
 * Copyright (c) 2019. Yuriy Stul
 */
import Person from "./Person";

export default class Student implements Person {
    name: String;
    age: Number;

    constructor(name: String, age: Number) {
        this.name = name;
        this.age = age;
    }

    run(): void {
        console.log(`Student: ${this.name} - ${this.age}`)
    }
}
