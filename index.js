var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.prototype.main = function () {
        d3.selectAll("p").style("color", "white");
        $("p").hide();
        return 1;
    };
    return Startup;
}());
new Startup().main();
//# sourceMappingURL=index.js.map