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

export const checkIfFilterQueryParameterExists = (): boolean => {
    return !!Object.keys(router.currentRoute.value.query).find(key => key.includes('filter'));
};

/**
 * This will keep filter queries while changing sort and page options
 */
export const setPageAndSortQueriesExceptFilter = (page: number, sortBy: SortProductsBy) => {
    const currentQueries: any = { ...router.currentRoute.value.query };

    currentQueries['page'] = page;
    currentQueries['sort'] = sortBy;

    return currentQueries;
};
