<script setup lang="ts">
import FilterMenu from '@/components/menus/FilterMenu.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import SortMenu from '@/components/menus/SortMenu.vue';
import StoreLayout from '@/layouts/StoreLayout.vue';
import useProductStore from '@/stores/product';

const { setParametersAndFetchProducts } = useProductStore();

setParametersAndFetchProducts();
</script>

<template>
    <StoreLayout>
        <FilterMenu />
        <div class="w-full flex flex-col ps-6 pe-4">
            <SortMenu />
            <!-- content -->
            <template v-if="useProductStore().products.length">
                <div class="w-full grid lg:grid-cols-3 grid-cols-2 gap-5 mt-6">
                    <ProductCard
                        v-for="product in useProductStore().products"
                        :key="product.id"
                        :product="product"
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
        </div>
    </StoreLayout>
</template>
