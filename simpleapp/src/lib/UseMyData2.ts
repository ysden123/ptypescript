/*
 * Copyright (c) 2019. Yuriy Stul
 */

import UseMyData from "./UseMyData";
import MyData from "./MyData";

export default class UseMyData2 extends UseMyData {
    height: number;

    constructor(data: MyData, height: number) {
        super(data);
        this.height=height
    }

    toString(): string {
        return super.toString() + `, height = ${this.height}`;
    }
}