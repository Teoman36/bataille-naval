// La classe Mer classe représentant le plateau de jeu s'appelle Mer. On décide de la représenter par un tableau à deux
// la classe Mer dispose d'une méthode ajouterBateau(bateau : Bateau, position :
// Position) qui permet d'ajouter une unité (un morceau) du bateau à la position indiquée. Pour
// respecter, les règles du jeu, les autres unités du bateau devront être posées verticalement ou
// horizontalement dans les cases adjacentes. Il ne vous est pas demandé de vérifier cela (mais vous
// pouvez le faire si vous avez le temps). Si la position est déjà occupée, il faut que la méthode lève une
// exception. De même, si la position n'est pas valide (en dehors du plateau), il faut que la méthode lève
// une exception.
// La classe Mer dispose d'une méthode tirer(position : Position) qui permet de tirer sur la
// case indiquée. La méthode retourne la chaîne de caractères "dans l'eau", "touché" ou "coulé" selon
// le cas. Si la position n'est pas valide (en dehors du plateau), il faut que la méthode lève une
// exception
import { Cellule } from "./Cellule";
import { Position } from "./Position";
import { Bateau } from "./Bateau";

// dimensions composé d'objet de type Cellule.
class Mer {
    private _plateau: Cellule[][];

    private _taille: number = 0;
    public getTaille(): number {    
        return this._taille;
    }
    public setTaille(value: number) {
        this._taille = value;
    }

    public getPlateau(): Cellule[][] {
        return this._plateau;
    }

    public setPlateau(value: Cellule[][]) {
        this._plateau = value;
    }

    constructor(taille: number) {
        this.setTaille(taille);
        this._plateau = new Array(taille);
        for (let i = 0; i < taille; i++) {
            this._plateau[i] = new Array(taille);
            for (let j = 0; j < taille; j++) {
                this._plateau[i][j] = new Cellule();
            }
        }
    }

    ajouterBateau(bateau: Bateau, position: Position): void {     
        if (position.getX() >= this._plateau.length || position.getY() >= this._plateau.length) {
            throw new Error("La position n'est pas valide");
        }
        if (this._plateau[position.getX()][position.getY()].isBateauPresent()) {
            throw new Error("La position est déjà occupée");
        }
        this._plateau[position.getX()][position.getY()].setBateau(bateau);
    }
    tirer(position: Position): string {
        if (position.getX() >= this._plateau.length || position.getY() >= this._plateau.length) {
            throw new Error("La position n'est pas valide");
        }
        return this._plateau[position.getX()][position.getY()].toucher();
    }
    
   
}

export {Mer}