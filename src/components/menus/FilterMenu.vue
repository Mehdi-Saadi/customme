<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
import ProductFilterDropdown from '@/components/dropdowns/ProductFilterDropdown.vue';
import ProductPriceFilterDropdown from '@/components/dropdowns/ProductPriceFilterDropdown.vue';
import { updateProductPageQueries } from '@/scripts/product';
import useProductStore from '@/stores/product';
import { useRouter } from "vue-router";

const productStore = useProductStore();
const router = useRouter();

const handleInStockToggle = (): void => {
    router.push({
        name: 'product.list',
        query: updateProductPageQueries({
            page: 1,
            'filter[in_stock]': !productStore.inStockOnly,
        }),
    });
};
</script>

<template>
    <div
        class="max-w-72 w-full h-auto border rounded-lg hidden xl:flex flex-col items-center px-5 pt-5 pb-2"
    >
        <div class="w-full flex items-center justify-between mb-2">
            <span class="text-base"> فیلترها </span>
            <RouterLink
                v-show="
                    Object.keys(productStore.filterBy).length || productStore.inStockOnly
                "
                :to="{
                    name: 'product.list',
                    query: { page: productStore.pageNumber, sort: productStore.sortBy },
                }"
                class="text-rose-750 text-2xs font-bold"
            >
                حذف فیلترها
            </RouterLink>
        </div>
        <ProductFilterDropdown
            v-for="filter in productStore.productFilters"
            :key="filter.id"
            :filter="filter"
        />
        <FilterButton
            @click="handleInStockToggle"
            :toggle-checked="productStore.inStockOnly"
            title="فقط کالاهای موجود"
            icon="toggle"
        />
        <ProductPriceFilterDropdown />
    </div>
</template>
