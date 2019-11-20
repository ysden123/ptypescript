/*
 * Copyright (c) 2019. Yuriy Stul
 */

export default class SimpleClass {
    constructor() {

    }

    run(): void {
        console.log((new Date()) +  " ==>SimpleClass::run");
        setTimeout(()=>{
            console.log((new Date()) +  " <==SimpleClass::run");
        }, 500)
    }
}