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

interface ProductPageQuery {
    page?: string | number;
    sort?: SortProductsBy;
    'filter[in_stock]'?: boolean;
    [K: `filter[options][${string}]`]: string;
}

/**
 * Will update provided fields.
 * Fields that doesn't provide will be untouched.
 */
export const updateProductPageQueries = (newQueries: ProductPageQuery) => {
    const currentQueries: any = { ...router.currentRoute.value.query };

    for (const queryKey in newQueries) {
        currentQueries[queryKey] = newQueries[queryKey as keyof ProductPageQuery];
    }

    return currentQueries;
};
