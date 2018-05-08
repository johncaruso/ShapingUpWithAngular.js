function gallery() {
    return {
        restrict: 'E',
        templateUrl: 'gallery.html',
        controller: function () {
            this.imageIndex = 0;

            this.currentImageChange = function (imageNumber) {
                console.log(imageNumber);
                this.imageIndex = imageNumber || 0;
            };
        },
        controllerAs: 'gallery'
    };
}
