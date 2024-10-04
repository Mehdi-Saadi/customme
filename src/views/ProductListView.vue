<script setup lang="ts">
import CircleArrowLeftIcon from '@/components/icons/CircleArrowLeftIcon.vue';
import CircleArrowRightIcon from '@/components/icons/CircleArrowRightIcon.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import StoreLayout from '@/layouts/StoreLayout.vue';
import useProductStore from '@/stores/product';

const { fetchProducts, nextPage, previousPage, getImage } = useProductStore();

fetchProducts();
</script>

<template>
    <StoreLayout>
        <template v-if="useProductStore().products">
            <div class="w-full grid grid-cols-3 gap-5 mt-6">
                <ProductCard
                    v-for="product in useProductStore().products"
                    :key="product.id"
                    :image="getImage(product.relationships.images.data[0].id) || ''"
                    :title="product.attributes.name"
                    :info="product.attributes.description"
                    :price="product.attributes.price"
                />
            </div>
            <div class="w-full flex items-center mt-10 h-14 px-28 space-x-3 rtl:space-x-reverse">
                <CircleArrowRightIcon
                    @click="previousPage()"
                    class="size-6 cursor-pointer"
                    title="قبلی"
                />
                <div class="grow h-full border rounded-3xl py-3 px-9"></div>
                <CircleArrowLeftIcon
                    @click="nextPage()"
                    class="size-6 cursor-pointer"
                    title="بعدی"
                />
            </div>
        </template>
        <span
            v-else
            class="mx-auto mt-48"
        >
            درحال بارگیری...
        </span>
    </StoreLayout>
</template>
