<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
import { ref } from 'vue';

defineProps<{
    filter: ProductFilter;
}>();

const showList = ref<boolean>(false);
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
        <ol
            v-show="showList"
            class="h-min"
        ></ol>
    </div>
</template>
