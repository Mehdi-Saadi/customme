import router from '@/router';

export const getSortOption = (sort: any): SortProductsBy => {
    switch (sort) {
        case '-created_at':
            return '-created_at';
        case '-price':
            return '-price';
        case 'price':
            return 'price';
        default:
            return '-view_count';
    }
};

type ProductPageQuery = Record<'page' | 'sort' | `filter[options][${string}]`, number | string | SortProductsBy>;

/**
 * Will update provided fields, fields that doesn't provide will be untouched
 */
export const updateProductPageQueries = (newQueries: ProductPageQuery) => {
    const currentQueries: any = { ...router.currentRoute.value.query };

    for (const queryKey in newQueries) {
        currentQueries[queryKey] = newQueries[queryKey as keyof ProductPageQuery];
    }

    return currentQueries;
};
