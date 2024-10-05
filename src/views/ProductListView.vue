<script setup lang="ts">
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import StoreLayout from '@/layouts/StoreLayout.vue';
import useProductStore from '@/stores/product';
import router from '@/router';

const { fetchProducts, getImage } = useProductStore();

const page: any = router.currentRoute.value.query.page || 1;

// initial fetch
fetchProducts(Number(page));
</script>

<template>
    <StoreLayout>
        <template v-if="useProductStore().products">
            <div class="w-full grid grid-cols-3 gap-5 mt-6">
                <ProductCard
                    v-for="product in useProductStore().products"
                    :key="product.id"
                    :image="getImage(product.relationships.images.data[0]?.id) || ''"
                    :title="product.attributes.name"
                    :info="product.attributes.description"
                    :price="product.attributes.price"
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
