// src/models/product.ts
export class Product {
    productId: string;
    name: string;
    price: number;
    imageUrl?: string;
    category?: string;
  
    constructor(
      productId: string,
      name: string,
      price: number,
      imageUrl?: string,
      category?: string
    ) {
      this.productId = productId;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.category = category;
    }
  
    // Example method: Get a formatted price with currency symbol
    getFormattedPrice(): string {
      return `$${this.price.toFixed(2)}`;
    }
  }
  