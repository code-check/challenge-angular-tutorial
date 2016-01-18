## Step 1: Adding your App name to the body
Open public/index.html, in which we all an atribute to the `body` tag.

Modify the tag so the end results looks like this
```HTML
<body ng-app="myApp">
```

This lets Angular know we will be using the App called `MyApp`.

## Step 2: Creating your App in the script
Navigate to public/app.js, here we will assign the module that will be your App.

In app.js write the following code
```JavaScript
var app = angular.module("myApp", []);
```

This creates a new Angular App called `MyApp`.

## Step 3: Adding the Controller name
Open public/index.html again, we will place another attribute `ng-controller="MyController"` on a div with the id `main`

The result should look like this.
```HTML
<div id="main" 
     ng-controller="MyController">
</div>
```

## Step 4: Creating the Controller
Navigate back public/app.js, we will add another piece of code.
```JavaScript
app.controller("MyController", ["$scope", function ($scope) {
    $scope.text = "Hello World!";
}]);
```

This will create a new Controller called `MyController` in our App. And in it's scope the will be a string called `text` containing `Hello World!`

## Step 5: Writing the text
Now in public/index.html again, we will add `{{text}}` as content for the div with the id `main`.

The end result should look like this.
```HTML
<div id="main" 
     ng-controller="MyController">
    {{text}}
</div>
```