// 1) Global variable naming conflicts

// // script.js
// var name = 'Fatih';

// // app.js
// var name = 'Example';

// console.log(name);

// 2) Encapsulation

// var Counter = {
//     number: 1,
//     increment: function () {
//         return ++this.number;
//     },
//     decrement: function () {
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.increment());   // 11 ?

// IIFE (Immediately Invoked Function Expressions)

// // We created a scope of its own    (script.js)
// (function () {
//     var name = 'Fatih';
//     console.log(name);
// })();

// // We created a scope of its own    (app.js)
// (function () {
//     var name = 'Example';
//     console.log(name);
// })();

// // As soon as it leaves its scope, its life cycle ends.


// var Module = (function () {
//     // private members
//     let number = 0;

//     let increment = function () {
//         return ++number;
//     }

//     let decrement = function () {
//         return --number;
//     }

//     return {
//         // public members
//         increment,
//         decrement
//     }
// })();

// // console.log(number);
// // console.log(increment());
// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());


var Module = (function () {
    var privateMethod = function () {

    };

    return {
        publicMethod: function () {

        }
    }
})()

Module.publicMethod();