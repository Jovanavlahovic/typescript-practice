class Robot{
    private _ime: String;
    constructor(ime: string = generisiIme()){
        this._ime = ime;
    }
    
	public get ime(): String {
		return this._ime;
	}

	public set ime(value: String) {
		this._ime = value;
	}

    predstaviSe():void{
        console.log(`Zdravo. Moje ime je ${this._ime}`);
    }

    reset():void{
        this._ime = "";
    }
}
let roboti: Robot[] = [];

function generisiIme():string{
    let ime: string = "";
    let i = 1;
    while(i<6){
        if(i<3){
            var a: string = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
            let random: number= Math.floor(Math.random()*a.length);
            ime+=a[random];
            i++;
        } else{
            let random:number = Math.floor(Math.random()*10);
            ime+=random;
            i++;
        }
    }
    
    for(let i in roboti){
        if(roboti[i].ime == ime){
            generisiIme();
        } else{
            return ime;
        }
    } return ime;
}

let r1 = new Robot();
let r2 = new Robot();
let r3 = new Robot();
let r4 = new Robot();
r1.predstaviSe();
r2.predstaviSe();
r3.predstaviSe();
r4.predstaviSe();