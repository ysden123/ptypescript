/*
 * Copyright (c) 2019. Yuriy Stul
 */

import MyData from "./MyData";

export default class UseMyData {
    data: MyData;

    constructor(data: MyData) {
        this.data = data;
    }

    toString(): string {
        return `${this.data.name} - ${this.data.age} `
    }
}
