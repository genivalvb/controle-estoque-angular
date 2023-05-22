import { Item } from "./item";

export class Stock {
    idStock!: number;
    localization!: string;
    realStock!: number;
    futureStock!: number;
    futureDate!: string;
    item!: Item;
    description!: string;
    unitPrice!: number;
    stockValue!: number;
    controlAbc!: number;
    percentageAccumulated!: number;
    economicLot!: string;
}
