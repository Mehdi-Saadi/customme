import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface Product {
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
}

interface ProductImage {
    attributes: {
        alt: string;
        original_url: string;
        // etc
    };
    id: string;
    type: string;
}

interface ProductLinks {
    first: string;
    last: string;
    next: string;
    prev: string;
    self: string;
}

const useProductStore = defineStore('product', () => {
    const pageNumber = ref<number>(1);
    const totalPages = ref<number>(1);
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

    const pagesToShow = computed(() => {
        const range: number = 2;
        let start: number = Math.max(1, pageNumber.value - range);
        let end: number = Math.min(totalPages.value, pageNumber.value + range);

        // Adjust start and end if they are too close to the edges
        if (pageNumber.value <= range) {
            end = Math.min(totalPages.value, end + (range - pageNumber.value + 1));
        }
        if (pageNumber.value + range >= totalPages.value) {
            start = Math.max(1, start - (pageNumber.value + range - totalPages.value));
        }

        const pages: number[] = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    });

    return {
        pageNumber,
        totalPages,
        products,
        links,
        fetchProducts,
        nextPage,
        previousPage,
        getImage,
        pagesToShow,
    };
});

export default useProductStore;
