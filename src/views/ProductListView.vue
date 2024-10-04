<script setup lang="ts">
import StoreLayout from '@/layouts/StoreLayout.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import useProductStore from '@/stores/product';

const { fetchProducts, getImage } = useProductStore();

fetchProducts();
</script>

<template>
    <StoreLayout>
        <template v-if="useProductStore().products">
            <div class="w-full grid grid-cols-3 gap-6 py-6">
                <ProductCard
                    v-for="product in useProductStore().products"
                    :key="product.id"
                    :image="getImage(product.relationships.images.data[0].id) || ''"
                    :title="product.attributes.name"
                    :info="product.attributes.description"
                    :price="product.attributes.price"
                />
            </div>
        </template>
        <template v-else> درحال بارگیری... </template>
    </StoreLayout>
</template>
