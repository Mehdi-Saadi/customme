<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
import ProductFilterDropdown from '@/components/dropdowns/ProductFilterDropdown.vue';
import ProductPriceFilterDropdown from '@/components/dropdowns/ProductPriceFilterDropdown.vue';
import { updateProductPageQueries } from '@/scripts/product';
import useProductStore from '@/stores/product';
import router from '@/router';

const handleInStockToggle = (): void => {
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
    <div class="max-w-72 w-full h-auto border rounded-lg flex flex-col items-center px-5 pt-5 pb-2">
        <div class="w-full flex items-center justify-between mb-2">
            <span class="text-base"> فیلترها </span>
            <RouterLink
                v-show="
                    Object.keys(useProductStore().filterBy).length || useProductStore().inStockOnly
                "
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
            @click="handleInStockToggle"
            :toggle-checked="useProductStore().inStockOnly"
            title="فقط کالاهای موجود"
            icon="toggle"
        />
        <ProductPriceFilterDropdown />
    </div>
</template>
