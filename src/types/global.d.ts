declare global {
    interface ProductAttributes {
        name: string;
        description: string;
        price: string;
        image: string;
        // etc
    }

    // -price is the most expensive
    type SortProductsBy = '-view_count' | '-created_at' | '-price' | 'price';
}

export {};
