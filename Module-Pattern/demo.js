(function () {
    // private members
    var collections = [];


    const addProduct = function (product) {
        collections.push(product);
    }

    const removeProduct = function (product) {
        var index = collections.indexOf(product);
        if (index >= 0) {
            collections.splice(index, 1);
        }
    }

    const getProducts = function () {
        return collections;
    }

})();