<script setup lang="ts">
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import StoreLayout from '@/layouts/StoreLayout.vue';
import useProductStore from '@/stores/product';
import router from '@/router';

// initial fetch
useProductStore().pageNumber = Number(router.currentRoute.value.query.page) || 1;
</script>

<template>
    <StoreLayout>
        <template v-if="useProductStore().products.length">
            <div class="w-full grid grid-cols-3 gap-5 mt-6">
                <ProductCard
                    v-for="product in useProductStore().products"
                    :key="product.id"
                    :product="product.attributes"
                />
            </div>
            <PaginationComponent />
        </template>
        <span
            v-else
            class="mx-auto mt-48"
        >
            درحال بارگیری...
        </span>
    </StoreLayout>
</template>
