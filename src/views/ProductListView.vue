<script setup lang="ts">
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import StoreLayout from '@/layouts/StoreLayout.vue';
import useProductStore from '@/stores/product';

const { setParametersAndFetchProducts } = useProductStore();

setParametersAndFetchProducts();
</script>

<template>
    <StoreLayout>
        <template v-if="useProductStore().products.length">
            <div class="w-full grid xl:grid-cols-3 grid-cols-2 gap-5 mt-6">
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
            class="mx-auto mt-24 mb-40"
        >
            درحال بارگیری...
        </span>
    </StoreLayout>
</template>
