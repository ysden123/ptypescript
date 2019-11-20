/*
 * Copyright (c) 2019. Yuriy Stul
 */

export default class SimpleClass {
    arg: string;

    constructor(arg: string) {
        this.arg = arg
    }

    run(): void {
        let start = new Date();
        console.log(`${start} ==> SimpleClass::run`);
        setTimeout(() => {
            let now = new Date();
            console.log(`${now} <==SimpleClass::run. arg is ${this.arg}`);
        }, 500)
    }
}