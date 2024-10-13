import type { Product, ProductFilter, SortProductsBy } from '@/types/product';
import { getSortOption } from '@/scripts/product';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

interface ProductImage {
    attributes: {
        alt: string;
        original_url: string;
        // etc
    };
    id: string;
    type: string;
}

type FilterProductsBy = Record<string, string>;

const useProductStore = defineStore('product', () => {
    const pageNumber = ref<number>(0);
    const sortBy = ref<SortProductsBy>('-view_count');
    const filterBy = ref<FilterProductsBy>({});
    const inStockOnly = ref<boolean>(false);
    const priceRange = ref<{ min: number; max: number }>({ min: 0, max: 500 });
    const totalPages = ref<number>(0);
    const products = ref<Product[]>([]);
    const productFilters = ref<ProductFilter[]>([]);

    const router = useRouter();

    const fetchProducts = async (): Promise<void> => {
        if (pageNumber.value <= 0) {
            return;
        }

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL +
                    `/products?include=images&per_page=24&page=${pageNumber.value}&sort=${sortBy.value}${convertFiltersToQueryString()}`,
                {
                    method: 'GET',
                }
            );
            const json = await response.json();

            totalPages.value = json.meta.total_pages;
            products.value = json.data;
            productFilters.value = json.meta.filters.option_types;

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

    const setPageNumber = (): void => {
        pageNumber.value = Number(router.currentRoute.value.query?.page) || 1;
    };

    const setSortBy = (): void => {
        sortBy.value = getSortOption(router.currentRoute.value.query?.sort);
    };

    const setFilterBy = (): void => {
        filterBy.value = {};

        for (const paramKey in router.currentRoute.value.query) {
            if (paramKey === 'page' || paramKey === 'sort') {
                continue;
            }

            filterBy.value[paramKey] = router.currentRoute.value.query[paramKey] as string;
        }
    };

    const setInStockOnly = (): void => {
        inStockOnly.value = router.currentRoute.value.query['filter[in_stock]'] === 'true';
    };

    const setPriceRange = (): void => {
        const priceRangeString: string | undefined = router.currentRoute.value.query[
            'filter[price]'
        ] as string | undefined;
        const rangeArray = priceRangeString?.split(',');

        if (rangeArray?.length !== 2) {
            return;
        }

        priceRange.value.min = Number(rangeArray[0]);
        priceRange.value.max = Number(rangeArray[1]);
    };

    const convertFiltersToQueryString = (): string => {
        const queryString = Object.keys(filterBy.value)
            .map(key => `${key}=${filterBy.value[key]}`)
            .join('&');

        return queryString.length ? `&${queryString}` : '';
    };

    const setParametersAndFetchProducts = (): void => {
        setPageNumber();
        setSortBy();
        setFilterBy();
        setInStockOnly();
        setPriceRange();

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
        filterBy,
        inStockOnly,
        priceRange,
        totalPages,
        products,
        productFilters,
        sortButtonIsActive,
        setParametersAndFetchProducts,
    };
});

export default useProductStore;
