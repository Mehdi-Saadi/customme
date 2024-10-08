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
