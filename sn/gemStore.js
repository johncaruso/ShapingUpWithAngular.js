(function () {
    var app = angular.module('gemStore', []);

    app.controller('GalleryController', function () {
        this.imageIndex = 0;

        this.currentImageChange = function (imageNumber) {
            console.log(imageNumber);
            this.imageIndex = imageNumber || 0;
        };
    });

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();
