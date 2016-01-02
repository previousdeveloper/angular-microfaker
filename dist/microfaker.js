(function () {
    "use strict";

    var app = angular.module('microFaker', []);

    app.factory('faker', microFaker);

    microFaker.$inject = [];

    function microFaker() {

        var service = {

            generateData: generateData
        };

        return service;


        function generateData(obj, times, cb) {


            var result = [];
            if (!!times) {
                for (var i = 0; i < times; i++) {

                    var nObj = {};

                    for (var k in obj) {

                        var objVal = obj[k];

                        if (objVal === Number) {

                            var randomNumber = Math.floor((Math.random() * 1000) + 1);
                            nObj[k] = randomNumber;
                        }
                        if (objVal === String) {

                            nObj[k] = k + Math.floor(Math.random() * 10000000);
                        }
                        if (objVal === Boolean) {

                            var randomBool = Math.random() >= 0.5;

                            nObj[k] = randomBool;
                        }

                    }

                    result.push(nObj);
                }
            }

            return cb(result);

        }

    }
})();