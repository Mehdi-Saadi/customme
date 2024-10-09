<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
import ProductFilterDropdown from '@/components/dropdowns/ProductFilterDropdown.vue';
import { updateProductPageQueries } from '@/scripts/product';
import useProductStore from '@/stores/product';
import router from '@/router';

const handleInStockToggle = () => {
    router.push({
        name: 'product.list',
        query: updateProductPageQueries({
            page: 1,
            'filter[in_stock]': !useProductStore().inStockOnly,
        }),
    });
};
</script>

<template>
    <div class="w-72 h-auto border rounded-lg flex flex-col items-center p-5 space-y-5">
        <div class="w-full flex items-center justify-between">
            <span class="text-base"> فیلترها </span>
            <RouterLink
                v-show="Object.keys(useProductStore().filterBy).length"
                :to="{
                    name: 'product.list',
                    query: { page: useProductStore().pageNumber, sort: useProductStore().sortBy },
                }"
                class="text-rose-750 text-2xs font-bold"
            >
                حذف فیلترها
            </RouterLink>
        </div>
        <ProductFilterDropdown
            v-for="filter in useProductStore().productFilters"
            :key="filter.id"
            :filter="filter"
        />
        <FilterButton
            title="ارسال امروز"
            icon="toggle"
        />
        <FilterButton
            @click="handleInStockToggle"
            :toggle-checked="useProductStore().inStockOnly"
            title="فقط کالاهای موجود"
            icon="toggle"
        />
        <FilterButton
            title="محدوده قیمت"
            icon="chevron"
            icon-class="size-4"
            :border-bottom="false"
        />
    </div>
</template>
