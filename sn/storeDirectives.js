(function () {

    var app = angular.module('storeDirectives', []);

    app.directive("catalog", function () {
        return {
            restrict: "E",
            templateUrl: "x_9210_suwa_catalog.do"
        };
    });

    app.directive("descriptions", function () {
        return {
            restrict: "E",
            templateUrl: "x_9210_suwa_descriptions.do"
        };
    });

    app.directive("reviews", function () {
        return {
            restrict: "E",
            templateUrl: "x_9210_suwa_reviews.do"
        };
    });

    app.directive("specs", function () {
        return {
            restrict: "E",
            templateUrl: "x_9210_suwa_specs.do"
        };
    });

    app.directive("productTabs", function () {
        return {
            restrict: "E",

            templateUrl: "x_9210_suwa_product-tabs.do",
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

})();
