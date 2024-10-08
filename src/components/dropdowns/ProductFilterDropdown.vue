<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
import { setPageAndSortQueriesExceptFilter } from '@/scripts/product';
import useProductStore from '@/stores/product';
import { ref, watch } from 'vue';
import router from '@/router';

const props = defineProps<{
    filter: ProductFilter;
}>();

const showList = ref<boolean>(false);

const filters = ref<string[]>([]);

watch(filters, () => {
    const { sortBy } = useProductStore();
    const query = setPageAndSortQueriesExceptFilter(1, sortBy);
    const stringFilters = filters.value.join(',');

    query[`filter[options][${props.filter.name}]`] = stringFilters.length
        ? stringFilters
        : undefined;

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
                class="flex items-center space-x-2 rtl:space-x-reverse py-2 border-b cursor-pointer"
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
