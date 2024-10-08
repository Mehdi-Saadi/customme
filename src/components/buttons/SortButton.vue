<script setup lang="ts">
import { updateProductPageQueries } from '@/scripts/product';
import useProductStore from '@/stores/product';

defineProps<{
    sortBy: SortProductsBy;
    title: string;
}>();

const { sortButtonIsActive } = useProductStore();
</script>

<template>
    <li>
        <RouterLink
            :to="{
                name: 'product.list',
                query: updateProductPageQueries({ page: 1, sort: sortBy }),
            }"
            class="w-full flex flex-col items-center"
        >
            <span
                class="px-2 py-1 text-sm"
                :class="{ 'text-rose-750': sortButtonIsActive(sortBy) }"
            >
                {{ title }}
            </span>
            <span
                v-show="sortButtonIsActive(sortBy)"
                class="w-full h-0.5 rounded-full bg-rose-750"
            />
        </RouterLink>
    </li>
</template>
