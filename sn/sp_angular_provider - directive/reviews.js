function reviews() {
    return {
        restrict: 'E',
        templateUrl: 'reviews.html',
        controller: function () {
            this.review = {};

            this.addReview = function (product) {
                this.review.createdOn = Date.now();
                product.reviews.push(this.review);
                this.review = {};
            };
        },
        controllerAs: 'reviews'
    };
}
