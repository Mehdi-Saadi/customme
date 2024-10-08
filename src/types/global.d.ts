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

    interface ProductFilter {
        id: string;
        name: string;
        presentation: string;
        option_values: {
            id: string;
            name: string;
            presentation: string;
        }[];
    }
}

export {};
