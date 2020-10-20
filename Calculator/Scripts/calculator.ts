window.onload = function () {
    var calc = new Calculator('X','Y','Output');
};

class Calculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLDivElement;

    constructor(xId: string, yId: string, outputId: string) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
        //       Selektovati te elemente 
        this.x = document.getElementById(xId) as HTMLInputElement;
        this.y = document.getElementById(yId) as HTMLInputElement;
        this.output = document.getElementById(outputId) as HTMLDivElement;
        
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
        
    }

    wireEvents() {
      //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
      //       I implementira njihovu funkcionalnost
      document.getElementById("Add").addEventListener("click", () => {
        let numX = Number(this.x.value);
        let numY = Number(this.y.value);
        let value = this.add(numX, numY).toFixed(2);
        this.output.innerHTML = value;
      });
      document.getElementById("Subtract").addEventListener("click", () => {
        let numX = Number(this.x.value);
        let numY = Number(this.y.value);
        let value = this.subtract(numX, numY).toFixed(2);
        this.output.innerHTML = value;
      });
      document.getElementById("Multiply").addEventListener("click", () => {
        let numX = Number(this.x.value);
        let numY = Number(this.y.value);
        let value = this.multiply(numX, numY).toFixed(2);
        this.output.innerHTML = value;
      });
      document.getElementById("Divide").addEventListener("click", () => {
        let numX = Number(this.x.value);
        let numY = Number(this.y.value);
        let value = this.divide(numX, numY).toFixed(2);
        this.output.innerHTML = value;
      });
     
    }

    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    add(x: number, y: number): number{
        return x+y;
    }
    subtract(x: number, y: number): number{
        return x-y;
    }
    multiply(x: number, y: number){
        return x*y;
    }
    divide(x: number, y: number){
        return x/y;
    }
}



