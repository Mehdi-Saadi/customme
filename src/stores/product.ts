import { getSortOption } from '@/scripts/sortHelpers';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import router from '@/router';

interface Product {
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
    const pageNumber = ref<number>(0);
    const sortBy = ref<SortProductsBy>('-view_count');
    const totalPages = ref<number>(0);
    const products = ref<Product[]>([]);
    const productFilters = ref<ProductFilter[]>([]);
    const links = ref<ProductLinks | null>(null);

    const fetchProducts = async (): Promise<void> => {
        if (pageNumber.value <= 0) {
            return;
        }

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL +
                    `/products?include=images&page=${pageNumber.value}&per_page=24&sort=${sortBy.value}`,
                {
                    method: 'GET',
                }
            );
            const json = await response.json();

            totalPages.value = json.meta.total_pages;
            products.value = json.data;
            productFilters.value = json.meta.filters.option_types;
            links.value = json.links;

            setImageForProducts(json.included);
        } catch (error) {
            console.error(error);
        }
    };

    const setImageForProducts = (images: ProductImage[] | undefined): void => {
        if (images && images.length > 0) {
            for (const product of products.value) {
                const result = images.find(
                    image => image.id === product.relationships.images.data[0]?.id
                );

                product.attributes.image = result ? result.attributes.original_url : '';
            }
        }
    };

    const sortButtonIsActive = (sort: SortProductsBy): boolean => {
        return sortBy.value === sort;
    };

    const setParametersAndFetchProducts = (): void => {
        pageNumber.value = Number(router.currentRoute.value.query?.page) || 1;
        sortBy.value = getSortOption(router.currentRoute.value.query?.sort);

        fetchProducts();
    };

    // fetch products on route change
    watch(router.currentRoute, () => {
        if (router.currentRoute.value.name === 'product.list') {
            setParametersAndFetchProducts();
        }
    });

    return {
        pageNumber,
        sortBy,
        totalPages,
        products,
        productFilters,
        links,
        sortButtonIsActive,
        setParametersAndFetchProducts,
    };
});

export default useProductStore;
