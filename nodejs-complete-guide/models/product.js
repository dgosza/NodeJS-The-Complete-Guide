const products = []

module.exports = class Product {
    constructor(title){
        this.title = title
    }

    save() {
        products.push(this)
    }

    fetchAll(){
        return products
    }

}