window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
};
var Calculator = /** @class */ (function () {
    function Calculator(xId, yId, outputId) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
        //       Selektovati te elemente 
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
        //       I implementira njihovu funkcionalnost
        document.getElementById("Add").addEventListener("click", function () {
            var numX = Number(_this.x.value);
            var numY = Number(_this.y.value);
            var value = _this.add(numX, numY).toFixed(2);
            _this.output.innerHTML = value;
        });
        document.getElementById("Subtract").addEventListener("click", function () {
            var numX = Number(_this.x.value);
            var numY = Number(_this.y.value);
            var value = _this.subtract(numX, numY).toFixed(2);
            _this.output.innerHTML = value;
        });
        document.getElementById("Multiply").addEventListener("click", function () {
            var numX = Number(_this.x.value);
            var numY = Number(_this.y.value);
            var value = _this.multiply(numX, numY).toFixed(2);
            _this.output.innerHTML = value;
        });
        document.getElementById("Divide").addEventListener("click", function () {
            var numX = Number(_this.x.value);
            var numY = Number(_this.y.value);
            var value = _this.divide(numX, numY).toFixed(2);
            _this.output.innerHTML = value;
        });
    };
    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.multiply = function (x, y) {
        return x * y;
    };
    Calculator.prototype.divide = function (x, y) {
        return x / y;
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map