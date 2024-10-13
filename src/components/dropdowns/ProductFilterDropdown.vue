<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
import { useUpdateProductPageQueries } from '@/composables/useProduct';
import type { ProductFilter } from '@/types/product';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { isEqual } from "lodash";

const props = defineProps<{
    filter: ProductFilter;
}>();

const { updateProductPageQueries } = useUpdateProductPageQueries();
const showList = ref<boolean>(false);
const filterName = `filter[options][${props.filter.name}]`;
const router = useRouter();

const getFiltersFromURL = (): string[] => {
    for (const queryKey in router.currentRoute.value.query) {
        if (filterName !== queryKey) {
            continue;
        }

        const queryString = router.currentRoute.value.query[queryKey];

        if (typeof queryString === 'string') {
            return queryString.split(',');
        }
    }

    return [];
};

const filters = ref<string[]>(getFiltersFromURL());

// this will be used when "reset filters" button clicked
watch(router.currentRoute, () => {
    if (router.currentRoute.value.name === 'product.list') {
        const filterParams = getFiltersFromURL();

        if (!isEqual(filters.value, filterParams)) {
            filters.value = filterParams;
        }
    }
});

watch(filters, (value, oldValue) => {
    if (isEqual(value, oldValue)) {
        return;
    }

    const query = updateProductPageQueries({ page: 1 });
    const stringFilters = filters.value.join(',');

    query[filterName] = stringFilters.length ? stringFilters : undefined;

    router.push({
        name: 'product.list',
        query: query,
    });
});
</script>

<template>
    <div class="flex flex-col w-full h-min">
        <!-- trigger -->
        <FilterButton
            :title="filter.presentation"
            icon="chevron"
            icon-class="size-4"
            @click="showList = !showList"
        />
        <!-- list -->
        <div
            v-show="showList"
            class="flex flex-col w-full max-h-52 overflow-y-auto p-0 text-sm"
        >
            <label
                v-for="item in filter.option_values"
                :key="item.id"
                class="flex items-center space-x-2 rtl:space-x-reverse py-4 border-b cursor-pointer"
                :for="item.id"
            >
                <input
                    :id="item.id"
                    :value="item.name"
                    v-model="filters"
                    class="border rounded focus:ring-0 ring-0"
                    type="checkbox"
                />
                <span>
                    {{ item.presentation }}
                </span>
            </label>
        </div>
    </div>
</template>
