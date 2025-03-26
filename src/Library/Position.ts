// -x : int
// -y : int
// +Position(x : int, y : int)
// +getX() : int
// +getY() : int
// +égal(p : Position) : boolean

class Position {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public getX(): number {
        return this._x;
    }

    public getY(): number {
        return this._y;
    }

    public égal(p: Position): boolean {
        return this._x === p.getX() && this._y === p.getY();
    }

}

export { Position }