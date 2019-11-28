---
title: "Fourth Post - Javascript `this`"
date: "2019-08-21"
author: " Vladyslav Ganushkevych"
image: ../../images/js.jpg
tags:
- code
- js
- this
---
# Javascript `this`
 A lot of people find **this** keyword in Javascript very confusing. Depending on where is it used and defined it can have different value.

# This In Functions
In normal Javascript functions **this** refers to global object. It will be **window** object in browser and **global** object in node.
```javascript
function simpleFunction () {
  console.log(this === window); 
  //prints true to console
}
```
If **strict mode** will be enabled - **this** inside normal function will be **undefined**.
```javascript
function withStrict () {
  'use strict';
  console.log(this);
  // prints undefined to console
}
```
# This In Constructor Functions
When a function is invoked with **new** keyword then the function is known as constructor function and returns a new instance. In such cases, the value of **“this”** refers to newly created instance.
```javascript
function Person() {
    this.name = "Vlad"

    this.logName = function(){
        console.log(this.name)
    }
}

const person = new Person();
person.logName() // Will output `Vlad`
```
This In Methods
In Javascript object fields can be simple values like **string** or **number** but it can also be a function.

In this case this function will be a **method** of an object. And when object **method** is invoked - **this** will refer to that paren object.
```javascript
const user = {
    name: 'Vlad',
    logName: function(){
        console.log(this.name)
        // will log `Vlad`
    }
}
```
But **method** can loose reference to it’s parent object. In this example if we assign logName to an external variable and then call it - **this** inside of it will be **global** object (or **undefined** in **strict mode**).
```javascript
const user = {
    name: 'Vlad',
    logName: function(){
        'use strict'
        console.log(this)
        console.log(this.name)
    }
}

const brokenLogName = user.logName
brokenLogName() // Will give `TypeError: this is undefined`
```
# This In Browser Event Handlers
In event handlers callbacks, this refers to the HTML element that received the event:
```javascript
document.querySelector('#button').addEventListener('click', function(e) {
  console.log(this) //HTMLElement
}
```