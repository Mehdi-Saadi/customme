import ProductListView from '@/views/ProductListView.vue';
import useProductStore from '@/stores/product';
import { createRouter, createWebHistory } from 'vue-router';
import { getSortOption } from '@/scripts/sortHelpers';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/products',
            name: 'product.list',
            component: ProductListView,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.name === 'product.list') {
        const { fetchProducts, setPageNumber, sortProducts } = useProductStore();

        setPageNumber(Number(to.query?.page) || 1);
        sortProducts(getSortOption(to.query?.sort));

        fetchProducts();
    }

    next();
});

export default router;
