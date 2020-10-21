var Namestaj = /** @class */ (function () {
    function Namestaj(sifra, naziv, jedinicnaCena, kolicinaUMagacinu) {
        this._sifra = sifra;
        this._naziv = naziv;
        this._jedinicnaCena = jedinicnaCena;
        this._kolicinaUMagacinu = kolicinaUMagacinu;
    }
    Object.defineProperty(Namestaj.prototype, "sifra", {
        get: function () {
            return this._sifra;
        },
        set: function (value) {
            this._sifra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "jedinicnaCena", {
        get: function () {
            return this._jedinicnaCena;
        },
        set: function (value) {
            this._jedinicnaCena = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "kolicinaUMagacinu", {
        get: function () {
            return this._kolicinaUMagacinu;
        },
        set: function (value) {
            this._kolicinaUMagacinu = value;
        },
        enumerable: false,
        configurable: true
    });
    return Namestaj;
}());
var Salon = /** @class */ (function () {
    function Salon(naziv, adresa, telefon) {
        this._naziv = naziv;
        this._adresa = adresa;
        this._telefon = telefon;
        this._namestaji = [];
    }
    Object.defineProperty(Salon.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "telefon", {
        get: function () {
            return this._telefon;
        },
        set: function (value) {
            this._telefon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "namestaji", {
        get: function () {
            return this._namestaji;
        },
        set: function (value) {
            this._namestaji = value;
        },
        enumerable: false,
        configurable: true
    });
    Salon.prototype.ispisiNamestajNaStanju = function () {
        for (var i in this._namestaji) {
            var namestaj = this._namestaji[i];
            if (namestaj.kolicinaUMagacinu > 0) {
                console.log((i + 1) + ". " + this._namestaji[i].sifra + " " + this._namestaji[i].naziv + " " + this._namestaji[i].kolicinaUMagacinu + " " + this._namestaji[i].jedinicnaCena);
            }
        }
    };
    Salon.prototype.dodajNaLager = function (sifra, kolicina) {
        for (var i in this._namestaji) {
            if (this._namestaji[i].sifra == sifra) {
                this._namestaji[i].kolicinaUMagacinu += kolicina;
                console.log("Kolicina uspesno izmenjena");
                return;
            }
        }
        console.log("Ne postoji namestaj sa unetom sifrom");
    };
    Salon.prototype.dodajNamestaj = function (noviNamestaj) {
        for (var i in this._namestaji) {
            if (this._namestaji[i].sifra == noviNamestaj.sifra) {
                console.log("Namestaj sa ovom sifrom vec postoji. Podaci nisu dodati.");
                return;
            }
        }
        this._namestaji.push(noviNamestaj);
        console.log("Namestaj uspesno dodat.");
    };
    Salon.prototype.prodajKomad = function (sifra, kolicina) {
        for (var i = 0; i < this._namestaji.length; i++) {
            var namestaj = this._namestaji[i];
            if (namestaj.sifra == sifra) {
                if (namestaj.kolicinaUMagacinu < kolicina) {
                    console.log("Nema dovoljno namestaja na lageru.");
                    return;
                }
                else {
                    console.log("Uspesno ste kupili " +
                        kolicina +
                        " namestaja " +
                        namestaj.naziv +
                        " za " +
                        kolicina * namestaj.jedinicnaCena +
                        "RSD!");
                    namestaj.kolicinaUMagacinu -= kolicina;
                    return;
                }
            }
        }
        console.log("Ne postoji namestaj sa unetom sifrom.");
    };
    return Salon;
}());
var n1 = new Namestaj(111, "Komoda", 3000, 15);
var n2 = new Namestaj(222, "Sto", 7000, 10);
var n3 = new Namestaj(333, "Stolica", 2000, 30);
var n4 = new Namestaj(444, "Polica", 1500, 17);
var noviNamestaji = [];
noviNamestaji.push(n1, n2, n3, n4);
var salon = new Salon("Boneli", "Partizanska 3", "021435598");
salon.namestaji = noviNamestaji;
var n5 = new Namestaj(555, "Fotelja", 5000, 4);
salon.dodajNaLager(444, 3);
salon.dodajNamestaj(n5);
salon.prodajKomad(444, 1);
salon.ispisiNamestajNaStanju();
//# sourceMappingURL=app.js.map