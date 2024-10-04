import { defineStore } from 'pinia';
import { ref } from 'vue';

type Product = {
    id: string;
    attributes: {
        name: string;
        description: string;
        price: string;
        // etc
    };
    relationships: {
        images: {
            data: {
                id: string;
                type: 'image';
            }[];
        };
    };
    // etc
};

type ProductImage = {
    attributes: {
        alt: string;
        original_url: string;
        // etc
    };
    id: string;
    type: string;
};

type ProductLinks = {
    first: string;
    last: string;
    next: string;
    prev: string;
    self: string;
};

const useProductStore = defineStore('product', () => {
    const products = ref<Product[] | null>(null);
    const images = ref<ProductImage[] | null>(null);
    const links = ref<ProductLinks | null>(null);

    const fetchProducts = async (): Promise<void> => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/products?include=images', {
                method: 'GET',
            });
            const json = await response.json();

            products.value = json.data;
            images.value = json.included;
            links.value = json.links;
        } catch (error) {
            console.error(error);
        }
    };

    const getImage = (imageId: string): string | null => {
        if (!images.value) {
            return null;
        }

        const result = images.value.find(image => image.id === imageId);

        if (!result) {
            return null;
        }

        return result.attributes.original_url;
    };

    return {
        products,
        links,
        fetchProducts,
        getImage,
    };
});

export default useProductStore;
