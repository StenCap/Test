class Adres {
    constructor(straat, postnummer, gemeente) {
        // initialisatie
        this.straat = straat;
        this.postnummer = postnummer;
        this.gemeente = gemeente;
    }
    toString() {
        // uitwerken…
        return (this.straat + ", " + this.postnummer +" "+ this.gemeente);
    }
}
class Persoon {
    constructor(naam, adres) {
        // initialisatie
        this.naam = naam;
        this.adres = adres;
    }
    toString() {
        // uitwerken…
        return (this.naam + "\n" + adres.toString());
    }
}
let adres = new Adres("Meir 42", 2000, "Antwerpen");
let persoon = new Persoon("Jos Bosmans", adres);
console.log(persoon.toString());