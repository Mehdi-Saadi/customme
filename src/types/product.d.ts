export interface Product {
    id: string;
    attributes: ProductAttributes;
    relationships: {
        images: {
            data: {
                id: string;
                type: 'image';
            }[];
        };
    };
    // etc
}

interface ProductAttributes {
    name: string;
    description: string;
    price: string;
    image: string;
    // etc
}

// -price is the most expensive
export type SortProductsBy = '-view_count' | '-created_at' | '-price' | 'price';

export interface ProductFilter {
    id: string;
    name: string;
    presentation: string;
    option_values: {
        id: string;
        name: string;
        presentation: string;
    }[];
}

export interface ShoppingCartItem {
    product: Product;
    count: number;
}
