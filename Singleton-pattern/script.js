// Singleton Pattern

// var singleton = (function () {

//     var instance;

//     const createInstance = function () {
//         return {
//             randomNumber: Math.random()
//         }
//     }

//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = new createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceOne = singleton.getInstance();
// const instanceTwo = singleton.getInstance();

// console.log(instanceOne.randomNumber);
// console.log(instanceTwo.randomNumber);


var singleton = (function () {
    var instance;

    function ProductController() {
        const products = [
            { name: 'product 1' },
            { name: 'product 2' },
            { name: 'product 3' }
        ];

        const add = function (product) {
            products.push(product);
        }

        const get = function () {
            return products;
        }

        return {
            add, get
        }
    }


    return {
        getInstance: function () {
            if (!instance) {
                instance = new ProductController();
            }
            return instance;
        }
    }
})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

productController1.add({ name: 'product 4' });
productController2.add({ name: 'product 5' });
console.log((productController1.get()));