type Size = ""|"S"|"M"|"L"

class Product {
    constructor(
        public name: string,
        public price: number,
        public size: Size = ""
    ) {}

    isProductReady(): boolean {
        for(const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if (String(this[key]).length <=0 ) throw Error(`${ key } is empty`);
                    break;
                case 'number':
                    if (Number(this[key]) <=0 ) throw Error(`${ key } is zero`);
                    break;
                default:
                    throw Error(`${ typeof this[key] } is not valir`);
            }            
        }

        return true;
    }

    toString() {
        // No Dry
        /*
        if (this.name.length <= 0 ) throw new Error("name is empty")
        if (this.price <= 0 ) throw new Error("price is empty")
        if (this.size.length <= 0 ) throw new Error("size is empty")
         */

        if (!this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product("", 10, "S");

    console.log(bluePants.toString());
    

})()