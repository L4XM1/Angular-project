export class Item {
    id: number;
    name: string;
    price: number;
    special: string;
    src: string;
    alt: string;
    image: string;
    description: string;
    category: string;
    quantity: number;


    constructor(
        id: number,
        name: string,
        price: number,
        special: string,
        src: string,
        alt: string,
        image: string,
        description: string,
        category: string,
        quantity: number,

    ){
        this.id=id,
        this.name=name,
        this.price=price,
        this.special=special,
        this.src=src;
        this.alt=alt;
        this.image=image;
        this.description=description;
        this.category=category;
        this.quantity=quantity;

    }
}