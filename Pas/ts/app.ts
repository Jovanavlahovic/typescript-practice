class Pas {
    private _ime: string;
    private _starost: number;
    private _vakcinisan: boolean;
    private _rasa: string;
    constructor(ime: string, starost: number, rasa: string){
        this._ime = ime;
        this._starost = starost;
        this._vakcinisan = false;
        this._rasa = rasa;
    }

    get ime():string{
        return this._ime;
    }
    set ime(ime:string){
        this._ime = ime;
    }
    get rasa():string{
        return this._rasa;
    }
    set rasa(rasa:string){
        this._rasa = rasa;
    }
    get starost():number{
        return this._starost;
    }
    set starost(starost:number){
        this._starost = starost;
    }
    get vakcinisan():boolean{
        return this._vakcinisan;
    }
    public vakcinisi():void{
        if(!this._vakcinisan){
            this._vakcinisan = true;
        } else{
            console.log("Pas je vec vakcinisan.");
        }
    }
    public ispisiGodine():void{
        console.log(`Godine psa u ljudskim godinama: ${this._starost*7}.`);
    }

    public ispisiPodatkePsa():void{
        console.log(`Ime psa: ${this._ime} \nStarost psa: ${this._starost} \nRasa psa: ${this._rasa} \nPas ${this.vakcinisan ? "je" : "nije"} vakcinisan.\n`);
    }
}

class Kennel{
    private _naziv: string;
    private _adresa: string;
    private _psi: Pas[];
    constructor(naziv: string, adresa: string){
        this._naziv = naziv;
        this._adresa = adresa;
        this._psi = [];
    }

    get adresa(): string{
        return this._adresa;
    }
    set adresa(adresa: string){
        this._adresa = adresa;
    }
    get naziv(): string{
        return this._naziv;
    }
    set naziv(naziv: string){
        this._naziv = naziv;
    }

    get psi(): Pas[]{
        return this._psi;
    }
    set psi(psi: Pas[]){
        this._psi = psi;
    }

    public dodajPsa(pas: Pas):void{
        this._psi.push(pas);
    }

    public pronadjiNajstarijegPsa(): Pas{
        let najstariji: Pas = this._psi[0];
        for(var i in this._psi){
            if(najstariji.starost < this._psi[i].starost){
                najstariji = this._psi[i];
            }
        } return najstariji;
    }
    public pronadjiNajmladjegPsa(): Pas{
        let najmladji: Pas = this._psi[0];
        for(var i in this._psi){
            if(najmladji.starost > this._psi[i].starost){
                najmladji = this._psi[i];
            }
        } return najmladji;
    }

    public vakcnisaniPsi():void{
        console.log("Vakcinisani psi:\n")
        for(var i in this._psi){
            if(this._psi[i].vakcinisan){
                this._psi[i].ispisiPodatkePsa();
            }
        }
    }
}

let ken = new Kennel("Prvi Kennel", "Partizanska 2");
let p1 = new Pas("Vucko", 1, "Sarplaninac");
let p2 = new Pas("Lajka", 3, "Mongrel-Husky-Terrier");
let p3 = new Pas("Blejk", 5, "Vucjak");
let p4 = new Pas("Lesi", 5, "Skotski ovcar");
let p5 = new Pas("Beethoven", 2, "Bernardinac");
let p6 = new Pas("Snoopy", 68, "Dodž");
let p7 = new Pas("Scooby Doo", 48, "Nemacka doga");

ken.psi = [p1, p2, p3, p4, p5, p6, p7];

ken.vakcnisaniPsi();
console.log(ken.pronadjiNajmladjegPsa());
console.log(ken.pronadjiNajstarijegPsa());
