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
    const pageNumber = ref<number>(1);
    const totalPages = ref<number | null>(null);
    const products = ref<Product[] | null>(null);
    const images = ref<ProductImage[] | null>(null);
    const links = ref<ProductLinks | null>(null);

    const fetchProducts = async (page: number = 1): Promise<void> => {
        if (page <= 0) {
            return;
        }

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL + `/products?include=images&page=${page}&per_page=24`,
                {
                    method: 'GET',
                }
            );
            const json = await response.json();

            pageNumber.value = page;
            totalPages.value = json.meta.total_pages;
            products.value = json.data;
            images.value = json.included;
            links.value = json.links;
        } catch (error) {
            console.error(error);
        }
    };

    const nextPage = async (): Promise<void> => {
        await fetchProducts(pageNumber.value + 1);
    };

    const previousPage = async (): Promise<void> => {
        await fetchProducts(pageNumber.value - 1);
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
        pageNumber,
        totalPages,
        products,
        links,
        fetchProducts,
        nextPage,
        previousPage,
        getImage,
    };
});

export default useProductStore;
