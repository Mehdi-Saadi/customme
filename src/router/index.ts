import CartView from '@/views/CartView.vue';
import ProductListView from '@/views/ProductListView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/products',
            name: 'product.list',
            component: ProductListView,
        },
        {
            path: '/product/cart',
            name: 'product.cart',
            component: CartView,
        },
    ],
});

export default router;
