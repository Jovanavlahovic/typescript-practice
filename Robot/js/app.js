var Robot = /** @class */ (function () {
    function Robot(ime) {
        if (ime === void 0) { ime = generisiIme(); }
        this._ime = ime;
    }
    Object.defineProperty(Robot.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Robot.prototype.predstaviSe = function () {
        console.log("Zdravo. Moje ime je " + this._ime);
    };
    Robot.prototype.reset = function () {
        this._ime = "";
    };
    return Robot;
}());
var roboti = [];
function generisiIme() {
    var ime = "";
    var i = 1;
    while (i < 6) {
        if (i < 3) {
            var a = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
            var random = Math.floor(Math.random() * a.length);
            ime += a[random];
            i++;
        }
        else {
            var random = Math.floor(Math.random() * 10);
            ime += random;
            i++;
        }
    }
    for (var i_1 in roboti) {
        if (roboti[i_1].ime == ime) {
            generisiIme();
        }
        else {
            return ime;
        }
    }
    return ime;
}
var r1 = new Robot();
var r2 = new Robot();
var r3 = new Robot();
var r4 = new Robot();
r1.predstaviSe();
r2.predstaviSe();
r3.predstaviSe();
r4.predstaviSe();
//# sourceMappingURL=app.js.map