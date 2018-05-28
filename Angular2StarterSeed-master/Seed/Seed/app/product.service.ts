export class ProductService{
    products:string[] = [
        'Mobile','TV','Laptop','Watch'
    ]

    getAllProducts(){
        return this.products;
    }

    addProduct(newProduct:string):void{
        this.products.push(newProduct)
    }

    getRandomProduct():string{
        return this.products[Math.floor(Math.random()*this.products.length)];
    }
}