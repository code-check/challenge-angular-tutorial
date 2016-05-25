## Angular Tutorial

## Step 1: Adding your App name to the body
Open public/index.html, in which we add an atribute to the `body` tag.

Modify the tag so the end results looks like this
```HTML
<body ng-app="myApp">
```

This will let Angular know we will be using the App called `MyApp`.

## Step 2: Creating your App in the script
Navigate to public/app.js, here we will assign the module that is going be your App.

In app.js write the following code
```JavaScript
var app = angular.module("myApp", []);
```

This creates a new Angular App called `MyApp`.

## Step 3: Adding the Controller name
Open public/index.html again, we will place another attribute `ng-controller="MyController"` on the div with the id `main`

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

This creates a new Controller called `MyController` in our App. And in it's scope there will be a string called `text` containing `Hello World!`

## Step 5: Writing the text
Now in public/index.html again, we will add `{{ text }}` as content for the div with the id `main`.

The end result should look like this.
```HTML
<div id="main" 
     ng-controller="MyController">
    {{ text }}
</div>
```

### Test Results *before* solving the challenge  
```
codecheck: Finish with code 7
codecheck: tests  : 8
codecheck: success: 1
codecheck: failure: 7
```

### Test Results *after* solving the challenge
```
codecheck: Finish with code 0
codecheck: tests  : 8
codecheck: success: 8
codecheck: failure: 0
```
--- --- ---
## Run Tests
To run tests locally install `codecheck` by running the following command in terminal.
```
$ npm install codecheck -g
```
To run tests in web editor please click in `RUN` button on left side of web editor.
