

class car{
    public brand:string;
    public price:number;
    public owner:string;
    public rcNumber:number;

    public constructor(owner_name:string,car_brand:string,car_price:number){
        this.owner = owner_name;
        this.brand = car_brand;
        this.price = car_price;

    }

    public displayDetails(){
        console.log(`welcome ${this.owner},u've brought ${this.brand} of price of ${this.price}`);
    }

}   

let sample = new car("dinesh","audi",50000000);

sample.displayDetails();