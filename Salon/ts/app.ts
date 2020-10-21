class Namestaj {
  private _sifra: number;
  private _naziv: string;
  private _jedinicnaCena: number;
  private _kolicinaUMagacinu: number;
  constructor(
    sifra: number,
    naziv: string,
    jedinicnaCena: number,
    kolicinaUMagacinu: number
  ) {
    this._sifra = sifra;
    this._naziv = naziv;
    this._jedinicnaCena = jedinicnaCena;
    this._kolicinaUMagacinu = kolicinaUMagacinu;
  }

  public get sifra(): number {
    return this._sifra;
  }
  public set sifra(value: number) {
    this._sifra = value;
  }
  public get naziv(): string {
    return this._naziv;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public get jedinicnaCena(): number {
    return this._jedinicnaCena;
  }
  public set jedinicnaCena(value: number) {
    this._jedinicnaCena = value;
  }
  public get kolicinaUMagacinu(): number {
    return this._kolicinaUMagacinu;
  }
  public set kolicinaUMagacinu(value: number) {
    this._kolicinaUMagacinu = value;
  }
}

class Salon {
  private _naziv: string;
  private _adresa: string;
  private _telefon: string;
  private _namestaji: Namestaj[];
  constructor(naziv: string, adresa: string, telefon: string) {
    this._naziv = naziv;
    this._adresa = adresa;
    this._telefon = telefon;
    this._namestaji = [];
  }
  public get naziv(): string {
    return this._naziv;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public get adresa(): string {
    return this._adresa;
  }
  public set adresa(value: string) {
    this._adresa = value;
  }
  public get telefon(): string {
    return this._telefon;
  }
  public set telefon(value: string) {
    this._telefon = value;
  }
  public get namestaji(): Namestaj[] {
    return this._namestaji;
  }
  public set namestaji(value: Namestaj[]) {
    this._namestaji = value;
  }
  public ispisiNamestajNaStanju(): void {
    for (var i in this._namestaji) {
        let namestaj = this._namestaji[i];
      if (namestaj.kolicinaUMagacinu > 0) {
        console.log( (i + 1) + ". " + this._namestaji[i].sifra + " " + this._namestaji[i].naziv + " " + this._namestaji[i].kolicinaUMagacinu + " " + this._namestaji[i].jedinicnaCena);
      }
    }
  }

  public dodajNaLager(sifra: number, kolicina: number): void {
    for (var i in this._namestaji) {
      if (this._namestaji[i].sifra == sifra) {
        this._namestaji[i].kolicinaUMagacinu += kolicina;
        console.log("Kolicina uspesno izmenjena");
        return;
      }
    }
    console.log("Ne postoji namestaj sa unetom sifrom");
  }

  public dodajNamestaj(noviNamestaj: Namestaj): void {
    for (let i in this._namestaji) {
      if (this._namestaji[i].sifra == noviNamestaj.sifra) {
        console.log("Namestaj sa ovom sifrom vec postoji. Podaci nisu dodati.");
        return;
      }
    }
    this._namestaji.push(noviNamestaj);
    console.log("Namestaj uspesno dodat.");
  }

  public prodajKomad(sifra: number, kolicina: number): void {
    for (let i = 0; i < this._namestaji.length; i++) {
        let namestaj = this._namestaji[i];
      if (namestaj.sifra == sifra) {
        if (namestaj.kolicinaUMagacinu < kolicina) {
          console.log("Nema dovoljno namestaja na lageru.");
          return;
        } else {
          console.log(
            "Uspesno ste kupili " +
              kolicina +
              " namestaja " +
              namestaj.naziv +
              " za " +
              kolicina * namestaj.jedinicnaCena +
              "RSD!"
          );
          namestaj.kolicinaUMagacinu -= kolicina;
          return;
        }
      }
    }
    console.log(`Ne postoji namestaj sa unetom sifrom.`);
  }
}

let n1: Namestaj = new Namestaj(111, "Komoda", 3000, 15);
let n2: Namestaj = new Namestaj(222, "Sto", 7000, 10);
let n3: Namestaj = new Namestaj(333, "Stolica", 2000, 30);
let n4: Namestaj = new Namestaj(444, "Polica", 1500, 17);

let noviNamestaji: Namestaj[] = [];
noviNamestaji.push(n1, n2, n3, n4);

let salon = new Salon("Boneli", "Partizanska 3", "021435598");

salon.namestaji = noviNamestaji;

let n5: Namestaj = new Namestaj(555, "Fotelja", 5000, 4);

salon.dodajNaLager(444, 3);
salon.dodajNamestaj(n5);
salon.prodajKomad(444, 1);
salon.ispisiNamestajNaStanju();
