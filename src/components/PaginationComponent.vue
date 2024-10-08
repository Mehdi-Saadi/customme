<script setup lang="ts">
import CircleArrowRightIcon from '@/assets/icons/circle-arrow-right-icon.svg';
import CircleArrowLeftIcon from '@/assets/icons/circle-arrow-left-icon.svg';
import { VueAwesomePaginate } from 'vue-awesome-paginate';
import useProductStore from '@/stores/product';
import router from '@/router';
</script>

<template>
    <div class="w-full flex items-center justify-center mt-10">
        <VueAwesomePaginate
            :total-items="useProductStore().totalPages"
            :items-per-page="1"
            :max-pages-shown="3"
            v-model="useProductStore().pageNumber"
            @click="
                router.push({
                    name: 'product.list',
                    query: {
                        page: useProductStore().pageNumber,
                        sort: useProductStore().sortBy,
                    },
                })
            "
        >
            <template #prev-button>
                <CircleArrowRightIcon class="size-6" />
            </template>

            <template #next-button>
                <CircleArrowLeftIcon class="size-6" />
            </template>
        </VueAwesomePaginate>
    </div>
</template>

<style>
.pagination-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d1d5db;
    border-radius: 24px;
    padding: 0.75rem 1.5rem;
}
ul#componentContainer > li {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
}
.paginate-buttons {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
.paginate-buttons:hover {
    background-color: #f3f4f6;
}
.active-page {
    background-color: #ca8289;
}
.active-page:hover {
    background-color: #ca8289;
}
</style>
