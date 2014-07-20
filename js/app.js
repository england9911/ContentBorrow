var app = angular.module('ContentBorrowApp',['ui.bootstrap']);

// Custom nl2br 
app.filter('nl2br', function () {
    return function(text) {
       return text.replace(/\n/g, '<br/>');
    };
});