export class Item {
    name: string;
    description: string;
    price: number;
    rating: number;
    imagePath: string;

    constructor(
        name: string, 
        description: string, 
        imagePath: string,
        rating: number,
        price: number
        ){
            this.name = name;
            this.description = description;
            this.price = price;
            this.rating = rating;
            this.imagePath = imagePath
        }
}