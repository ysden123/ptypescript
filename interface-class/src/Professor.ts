/*
 * Copyright (c) 2019. Yuriy Stul
 */
import Person from "./Person";

export default class Professor implements Person {
    name: String;
    age: Number;
    experience: Number;

    constructor(name: String, age: Number, experience: Number) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }

    run() {
        console.log(`Professor: ${this.name} - ${this.age}, experience=${this.experience}`)
    }
}
