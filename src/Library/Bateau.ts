// La classe Bateau permet de définir les données sur les bateaux. Un objet Bateau est défini par sa
// longueur. La longueur du bateau détermine son nombre de points de vie et est fixée à la création de l'objet.
// Lorsqu'il est touché (méthode êtreTouché), ce nombre diminue de 1. Un bateau est coulé quand son
// nombre de point de vie arrive à 0 (méthode estCoulé permet de savoir si c'est le cas)

class Bateau {
    private _pointDeVie: number;

    private _longeurBateau: number =0;
    public getLongeurBateau(): number {
        return this._longeurBateau;
    }
    public setLongeurBateau(value: number) {   
        this._longeurBateau = value;
    }
    public getPointDeVie(): number {
        return this._pointDeVie;
    }
  
    public setPointDeVie(value: number) {
        this._pointDeVie = value;
    }
    public etreTouche(){    
        this._pointDeVie--;
    }

    public estCoule(){
        return this.internalEstCouleMethod();      
    }

    private internalEstCouleMethod() {
        return this._pointDeVie === 0;
    }


    constructor(longeurBateau: number) { 
        this.setLongeurBateau(longeurBateau); 
        
        this._pointDeVie = longeurBateau;    
    }

}

export {Bateau}
