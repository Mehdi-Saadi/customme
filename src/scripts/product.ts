import type { SortProductsBy } from '@/types/product';

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
