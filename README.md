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
Now in public/index.html again, we will add `{{ text }}` as content for the div with the id `main`.

The end result should look like this.
```HTML
<div id="main" 
     ng-controller="MyController">
    {{ text }}
</div>
```

## How to see if a step is finished
When running the tests, in the console something similar to the output below will be showed.
```
1..8
not ok 1 Step 1 body must have angular app specified
ok 2 Step 2 angular is running
not ok 3 Step 2 app is defined
not ok 4 Step 2 app must be an angular module
not ok 5 Step 3 main must have controller defined
not ok 6 Step 4 controller must be defined
not ok 7 Step 5 content must be variable
not ok 8 Step 5 content must be modified
# tests 8
# pass 1
# fail 7
codecheck: Finish with code 7
codecheck: tests  : 8
codecheck: success: 1
codecheck: failure: 7
```

The first lines of the output are all tests runing, a test that failed will show `not ok` and ones that ran succesfully will show `ok`, for example.

> not ok 1 Step 1 body must have angular app specified

This means that the result is `not ok`, it is test `1`, within `Step 1` and its description is `body must have angular app specified`

For example, Step 2 has a total of 3 tests in this case, of which 1 succeeded and 2 failed. If all were marked `ok` that would mean Step 2 would have been completed without errors.