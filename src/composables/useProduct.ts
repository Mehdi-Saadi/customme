import { useRouter } from 'vue-router';

interface ProductPageQuery {
    page?: string | number;
    sort?: SortProductsBy;
    'filter[in_stock]'?: boolean;
    'filter[price]'?: string;
    [K: `filter[options][${string}]`]: string;
}

/**
 * Will update provided fields.
 * Fields that doesn't provide will be untouched.
 */
export const useUpdateProductPageQueries = () => {
    const router = useRouter();

    const updateProductPageQueries = (newQueries: ProductPageQuery) => {
        const currentQueries: any = { ...router.currentRoute.value.query };

        for (const queryKey in newQueries) {
            currentQueries[queryKey] = newQueries[queryKey as keyof ProductPageQuery];
        }

        return currentQueries;
    };

    return {
        updateProductPageQueries,
    };
};
