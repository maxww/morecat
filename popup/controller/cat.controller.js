'use strict';
var $ = require('jquery');

module.exports = function ($scope) {

    function setScale(info) {
        $scope.catScale = info.catScale;
        $scope.$digest();
    }

    window.addEventListener("DOMContentLoaded", function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                from: "popup",
                subject: "DOMInfo"
            }, setScale)
        });
    });
}
