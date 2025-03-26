
// -bateau : Bateau
// -touché : boolean
// +Cellule()
// +getBateau() : Bateau
// +setBateau(bateau : Bateau)
// +estTouché() : boolean
// +toucher(): String

import { Bateau } from "./Bateau";

class Cellule{
    private _bateau: Bateau;
    private _touché: boolean;

    constructor(){
        this._bateau = new Bateau(0);
        this._touché = false;
    }

    public getBateau(): Bateau {
        return this._bateau;
    }

    public setBateau(value: Bateau) {
        this._bateau = value;
    }

//     Indication : la méthode toucher retourne la chaîne de caractères "dans l'eau", "touché" ou "coulé" selon
// le cas.

    public estTouché(): string {
        return this._touché? "touché" : "dans l'eau";
    }

    public toucher(): string {
        // console.log("toucher");

        if(this._bateau.getLongeurBateau() === 0){  
            return "dans l'eau";
        }
        this._touché = true;
        this._bateau.etreTouche();
        if (this._bateau.estCoule()) {
            return "coulé";
        } else {
            return "touché";
        }
    }

    //gérer la présence ou l'absence d'un bateau dans une cellule ?

    public isBateauPresent(): boolean {

        return this._bateau.getPointDeVie() === 0 ? false : true;
    }

}
export{Cellule}