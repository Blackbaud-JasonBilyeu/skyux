/*global angular */
(function () {
    'use strict';

    function DatepickerModalController() {
        var self = this;
        self.date = '';
    }

    function DatepickerDemoController(bbModal, $q) {
        var self = this;

        function formatValue(value) {
            return $q(function (resolve) {
                var formattedValue = value,
                    formattingErrorMessage;

                if (value.toUpperCase() !== value) {
                    formattingErrorMessage = "Any letters should be capitalized.";
                } else {
                    formattedValue = "[" + value.toUpperCase() + "]";
                }

                resolve({
                    formattedValue: formattedValue,
                    formattingErrorMessage: formattingErrorMessage
                });
            });
        }

        function openModal() {
            bbModal.open({
                controller: 'DatepickerModalController as dateModalCtrl',
                templateUrl: 'demo/datepicker/datepickermodal.html'
            });
        }


        self.openModal = openModal;

        self.setDate = function () {
            self.date1 = 'AAA';
        };
        self.customFormat = {
            formatValue: formatValue
        };

        self.date1 = 'aaa';
        self.date2 = '5/17/2015';
        self.placeholder = 'Your date here';
        self.minDate = new Date('5/21/2014');
        self.maxDate = new Date();
    }

    DatepickerDemoController.$inject = ['bbModal', '$q'];

    angular.module('stache')
    .controller('DatepickerModalController', DatepickerModalController)
    .controller('DatepickerDemoController', DatepickerDemoController);

}());
