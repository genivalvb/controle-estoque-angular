import { Item } from "./item";
import { Person } from "./person";
import { Stock } from "./stock";

export class Movement {
    idMovement!: number;
    dateMovement!: string;
    type!: string;
    originDestination!: string;
    quantity!: number;
    stock!: Stock;
    item!: Item;
    person!: Person;
}

