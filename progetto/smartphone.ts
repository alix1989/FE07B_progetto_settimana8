// interfaccia smartphone
interface Smartphone {
    //inserire proprietà interfaccia
    credito: number;
    numeroChiamate: number;
    
    // dichiarare i metodi
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// prima classe
class FirstUser implements Smartphone {
    //modificatori di accesso sulle proprietà
    public numeroChiamate: number;
    public credito: number;
    //dichiarazione del costruttore
    constructor (_credito: number, _numeroChiamate: number){
        this.credito = _credito;    
        this.numeroChiamate = _numeroChiamate;
    }
    //implementazione metodo ricarica
    ricarica(unaRicarica: number): void{
        this.credito = this.credito + unaRicarica;
    }
    //implementazione metodo chiamata
    chiamata(minutiDurata: number): void {
        this.credito = this.credito -(0.20*minutiDurata);
        this.numeroChiamate++;
    }
    //implementazione metodo numero404
    numero404(): number{
        return this.credito;
    }
    //implementazione metodo getNumeroChiamate
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    //implementazione metodo azzeraChiamate
    azzeraChiamate(): void {
        this.numeroChiamate = 0; 
    }
}

// seconda classe
class SecondUser implements Smartphone {

    public numeroChiamate: number;
    public credito: number;

    constructor (_credito: number, _numeroChiamate: number){
        this.credito = _credito;    
        this.numeroChiamate = _numeroChiamate;
    }
    
    ricarica(unaRicarica: number): void{
        this.credito = this.credito + unaRicarica;
    }
    chiamata(minutiDurata: number): void {
        this.credito = this.credito -(0.20*minutiDurata);
        this.numeroChiamate++;
    }
    numero404(): number{
        return this.credito;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0; 
    }
}

// terza classe
class ThirdUser implements Smartphone {
    public numeroChiamate: number;
    public credito: number;

    constructor (_credito: number, _numeroChiamate: number){
        this.credito = _credito;    
        this.numeroChiamate = _numeroChiamate;
    }
    
    ricarica(unaRicarica: number): void{
        this.credito = this.credito + unaRicarica;
    }
    chiamata(minutiDurata: number): void {
        this.credito = this.credito -(0.20*minutiDurata);
        this.numeroChiamate++;
    }
    numero404(): number{
        return this.credito;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0; 
    }
}

// implementazione delle classi
let primoUtente = new FirstUser(20, 1);
let secondoUtente = new SecondUser(15, 2);
let terzoUtente = new ThirdUser(55, 4);

// metodi primo utente

primoUtente.ricarica(20);
primoUtente.ricarica(40);
primoUtente.chiamata(12);
primoUtente.chiamata(13);

// metodi secondo utente

secondoUtente.ricarica(50);
secondoUtente.ricarica(22);
secondoUtente.chiamata(10);
secondoUtente.chiamata(8);

// metodi terzo utente

terzoUtente.ricarica(10);
terzoUtente.ricarica(25);
terzoUtente.chiamata(34);
terzoUtente.chiamata(1);

//console.log() primo utente:

console.log('--- PRIMO UTENTE ---');
console.log('Valore Carica Disponibile: ' + primoUtente.numero404());
console.log('Numero chiamate: ' + primoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento: ');
primoUtente.azzeraChiamate();
console.log('Chiamate: ' + primoUtente.getNumeroChiamate());

//console.log() secondo utente:

console.log('--- SECONDO UTENTE ---');
console.log('Valore Carica Disponibile: ' + secondoUtente.numero404());
console.log('Numero chiamate: ' + secondoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento: ');
secondoUtente.azzeraChiamate();
console.log('Chiamate: ' + secondoUtente.getNumeroChiamate());

//console.log() terzo utente:

console.log('--- TERZO UTENTE ---');
console.log('Valore Carica Disponibile: ' + terzoUtente.numero404());
console.log('Numero chiamate: ' + terzoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento: ');
terzoUtente.azzeraChiamate();
console.log('Chiamate: ' + terzoUtente.getNumeroChiamate());


