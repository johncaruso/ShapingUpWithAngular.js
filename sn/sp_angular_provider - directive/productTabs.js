function productTabs() {
    return {
        restrict: "E",
        templateUrl: "product-tabs.html",
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
}
