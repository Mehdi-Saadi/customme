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
    ],
});

export default router;
