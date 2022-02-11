// prima classe
var FirstUser = /** @class */ (function () {
    //dichiarazione del costruttore
    function FirstUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    //implementazione metodo ricarica
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito = this.credito + unaRicarica;
    };
    //implementazione metodo chiamata
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.credito = this.credito - (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    //implementazione metodo numero404
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    //implementazione metodo getNumeroChiamate
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    //implementazione metodo azzeraChiamate
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
// seconda classe
var SecondUser = /** @class */ (function () {
    function SecondUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.credito = this.credito + unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.credito = this.credito - (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
// terza classe
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito = this.credito + unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.credito = this.credito - (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
// implementazione delle classi
var primoUtente = new FirstUser(20, 1);
var secondoUtente = new SecondUser(15, 2);
var terzoUtente = new ThirdUser(55, 4);
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
