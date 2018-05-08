function store($http) {
    /* widget controller */
    var c = this;

    c.products = [];

    $http.get('/api/now/table/x_9210_suwa_product', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-UserToken': window.g_ck
        },
        params: {
            'sysparm_display_value': true
        }
    }).then(function (response) {
        c.products = response.data.result.map(function (product) {
            product.images = product.images.split(', ');
            product.shine = parseInt(product.shine, 10);
            product.rarity = parseInt(product.rarity, 10);
            product.faces = parseInt(product.faces, 10);
            product.price = parseFloat(product.price.substring(1));
            return product;
        });
        console.log(c.products);
    });
}
