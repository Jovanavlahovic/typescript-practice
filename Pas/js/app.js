var Pas = /** @class */ (function () {
    function Pas(ime, starost, rasa) {
        this._ime = ime;
        this._starost = starost;
        this._vakcinisan = false;
        this._rasa = rasa;
    }
    Object.defineProperty(Pas.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (ime) {
            this._ime = ime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "rasa", {
        get: function () {
            return this._rasa;
        },
        set: function (rasa) {
            this._rasa = rasa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "starost", {
        get: function () {
            return this._starost;
        },
        set: function (starost) {
            this._starost = starost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "vakcinisan", {
        get: function () {
            return this._vakcinisan;
        },
        enumerable: false,
        configurable: true
    });
    Pas.prototype.vakcinisi = function () {
        if (!this._vakcinisan) {
            this._vakcinisan = true;
        }
        else {
            console.log("Pas je vec vakcinisan.");
        }
    };
    Pas.prototype.ispisiGodine = function () {
        console.log("Godine psa u ljudskim godinama: " + this._starost * 7 + ".");
    };
    Pas.prototype.ispisiPodatkePsa = function () {
        console.log("Ime psa: " + this._ime + " \nStarost psa: " + this._starost + " \nRasa psa: " + this._rasa + " \nPas " + (this.vakcinisan ? "je" : "nije") + " vakcinisan.\n");
    };
    return Pas;
}());
var Kennel = /** @class */ (function () {
    function Kennel(naziv, adresa) {
        this._naziv = naziv;
        this._adresa = adresa;
        this._psi = [];
    }
    Object.defineProperty(Kennel.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (adresa) {
            this._adresa = adresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (naziv) {
            this._naziv = naziv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "psi", {
        get: function () {
            return this._psi;
        },
        set: function (psi) {
            this._psi = psi;
        },
        enumerable: false,
        configurable: true
    });
    Kennel.prototype.dodajPsa = function (pas) {
        this._psi.push(pas);
    };
    Kennel.prototype.pronadjiNajstarijegPsa = function () {
        var najstariji = this._psi[0];
        for (var i in this._psi) {
            if (najstariji.starost < this._psi[i].starost) {
                najstariji = this._psi[i];
            }
        }
        return najstariji;
    };
    Kennel.prototype.pronadjiNajmladjegPsa = function () {
        var najmladji = this._psi[0];
        for (var i in this._psi) {
            if (najmladji.starost > this._psi[i].starost) {
                najmladji = this._psi[i];
            }
        }
        return najmladji;
    };
    Kennel.prototype.vakcnisaniPsi = function () {
        console.log("Vakcinisani psi:\n");
        for (var i in this._psi) {
            if (this._psi[i].vakcinisan) {
                this._psi[i].ispisiPodatkePsa();
            }
        }
    };
    return Kennel;
}());
var ken = new Kennel("Prvi Kennel", "Partizanska 2");
var p1 = new Pas("Vucko", 1, "Sarplaninac");
var p2 = new Pas("Lajka", 3, "Mongrel-Husky-Terrier");
var p3 = new Pas("Blejk", 5, "Vucjak");
var p4 = new Pas("Lesi", 5, "Skotski ovcar");
var p5 = new Pas("Beethoven", 2, "Bernardinac");
var p6 = new Pas("Snoopy", 68, "Dodž");
var p7 = new Pas("Scooby Doo", 48, "Nemacka doga");
ken.psi = [p1, p2, p3, p4, p5, p6, p7];
ken.vakcnisaniPsi();
console.log(ken.pronadjiNajmladjegPsa());
console.log(ken.pronadjiNajstarijegPsa());
//# sourceMappingURL=app.js.map