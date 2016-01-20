"use strict";

var env = require("jsdom").env,
    assert = require("chai").assert,
    express = require("express"),
    app = express();

app.use(express.static("public"));
var listener = app.listen(0);

describe("Step 1", function () {
    var window;
    before(function (done) {
        this.timeout(5000);
        env({
            url: "http://127.0.0.1:" + listener.address().port + "/index.html",
            features: {
                FetchExternalResources: ['script']
            },
            done: function (errors, w) {
                window = w;
                done();
            }
        });
    });

    it("body must have angular app specified", function () {
        assert.equal(window.jQuery("body").attr("ng-app"), "myApp");
    });
});

describe("Step 2", function () {
    var window;
    before(function (done) {
        this.timeout(5000);
        env({
            url: "http://127.0.0.1:" + listener.address().port + "/index.html",
            features: {
                FetchExternalResources: ['script'],
                ProcessExternalResources: ['script']
            },
            done: function (errors, w) {
                window = w;
                done();
            }
        });
    });

    it("angular is running", function () {
        assert.isDefined(window.angular);
    });

    it("app is defined", function () {
        assert.isDefined(window.app);
    });

    it("app must be an angular module", function () {
        assert.equal(window.app.name, "myApp");
    });
});

describe("Step 3", function () {
    var window;
    before(function (done) {
        this.timeout(5000);
        env({
            url: "http://127.0.0.1:" + listener.address().port + "/index.html",
            features: {
                FetchExternalResources: ['script']
            },
            done: function (errors, w) {
                window = w;
                done();
            }
        });
    });

    it("main must have controller defined", function () {
        assert.equal(window.jQuery("#main").attr("ng-controller"), "MyController");
    });
});

describe("Step 4", function () {
    var window;
    before(function (done) {
        this.timeout(5000);
        env({
            url: "http://127.0.0.1:" + listener.address().port + "/index.html",
            features: {
                FetchExternalResources: ['script'],
                ProcessExternalResources: ['script']
            },
            done: function (errors, w) {
                window = w;
                done();
            }
        });
    });

    it("controller must be defined", function () {
        var scope = window.angular.element(window.document.getElementById("main")).scope();
        assert.equal(scope.text, "Hello World!");
    });
});

describe("Step 5", function () {
    var window, jQuery;
    before(function (done) {
        this.timeout(10000);
        env({
            url: "http://127.0.0.1:" + listener.address().port + "/index.html",
            features: {
                FetchExternalResources: ['script'],
                ProcessExternalResources: ['script']
            },
            done: function (errors, w) {
                window = w;
                env({
                    url: "http://127.0.0.1:" + listener.address().port + "/index.html",
                    done: function (errors, w) {
                        jQuery = require("jquery")(w);
                        done();
                    }
                });
            }
        });
    });
    it("content must be variable", function () {
        assert.equal(jQuery("[ng-controller]").html().replace(/\s/g, ''), "{{text}}");
    });

    it("content must be modified", function () {
        assert.equal(window.jQuery("[ng-controller]").html().replace(/\s/g, ''), "HelloWorld!");
    });
});