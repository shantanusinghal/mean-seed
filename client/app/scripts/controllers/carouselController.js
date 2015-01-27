/**
 * Created by ssinghal on 15/1/15.
 */
'use strict';

meanStackApp.controller('HomepageCarouselController', function ($scope) {
    $scope.slideInterval = 5000;
    $scope.slides = [
        {
            image: 'images/jpg/homepage1.jpg',
            caption: 'that\'s some meeting'
        },
        {
            image: 'images/jpg/homepage2.jpg',
            caption: 'that\'s someones desk'
        },
        {
            image: 'images/jpg/homepage3.jpg',
            caption: 'that\'s another meeting'
        }
    ];

})