<script setup lang="ts">
import StoreLayout from '@/layouts/StoreLayout.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import { ref } from 'vue';

type Product = {
    id: string;
    attributes: {
        name: string;
        description: string;
        price: string;
        // etc
    };
    relationships: {
        images: {
            data: {
                id: string;
                type: 'image';
            }[];
        };
    };
    // etc
};

type ProductImage = {
    attributes: {
        alt: string;
        original_url: string;
        // etc
    };
    id: string;
    type: string;
};

const products = ref<Product[] | null>(null);
let images: ProductImage[] | null = null;

fetch('https://demo.spreecommerce.org/api/v2/storefront/products?include=images', { method: 'GET' })
    .then(response => response.json())
    .then(response => {
        products.value = response.data;
        images = response.included;
    }).catch(error => console.log(error));

const getImage = (imageId: string): string | null => {
    if (!images) {
        return null;
    }

    const result = images.find(image => image.id === imageId);

    if (!result) {
        return null;
    }

    return result.attributes.original_url;
};
</script>

<template>
    <StoreLayout>
        <template v-if="products">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :image="getImage(product.relationships.images.data[0].id) || ''"
                :title="product.attributes.name"
                :info="product.attributes.description"
                :price="product.attributes.price"
            />
        </template>
        <template v-else> درحال بارگیری... </template>
    </StoreLayout>
</template>
