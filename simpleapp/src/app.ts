/*
 * Copyright (c) 2019. Yuriy Stul
 */
import SimpleClass from "./lib/SimpleClass";
import MyData from "./lib/MyData";
import UseMyData from "./lib/UseMyData";
import UseMyData2 from "./lib/UseMyData2";

console.log("Simple application");

const c = new SimpleClass("some argument");
c.run();

const myData: MyData = {
    name: "some name",
    age: 123
};

const ums = new UseMyData(myData);
console.log(`ums: ${ums.toString()}`);


const myData2: MyData = {age: 321, name: "some name 2"};
const ums2 = new UseMyData(myData2);
console.log(`ums2: ${ums2.toString()}`);

const ums22 = new UseMyData2(myData2, 66);
console.log(`ums22: ${ums22.toString()}`);
