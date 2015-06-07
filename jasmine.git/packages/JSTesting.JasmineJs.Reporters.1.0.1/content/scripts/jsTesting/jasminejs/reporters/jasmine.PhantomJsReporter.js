(function() {
    var JasminePhantomJsReporter = function () {
    };
    JasminePhantomJsReporter.prototype = {
        reportRunnerResults: function (runner) {
            // just write this text which will be catched in runner.onConsoleMsg to terminate phantom
            console.log("[PHANTOMJS] Test runner has finished.");
        }
    };

    jasmine.JasminePhantomJsReporter = JasminePhantomJsReporter;
})();