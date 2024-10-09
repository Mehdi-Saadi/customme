<script setup lang="ts">
import PricePickerComponent from '@/components/PricePickerComponent.vue';
import FilterButton from '@/components/buttons/FilterButton.vue';
import { ref } from 'vue';

const showPrice = ref<boolean>(false);
</script>

<template>
    <div class="flex flex-col w-full h-min">
        <!-- trigger -->
        <FilterButton
            title="محدوده قیمت"
            icon="chevron"
            icon-class="size-4"
            :border-bottom="false"
            @click="showPrice = !showPrice"
        />
        <!-- list -->
        <div
            v-if="showPrice"
            class="flex flex-col w-full max-h-52 overflow-y-auto py-4 px-0 text-sm border-t"
        >
            <PricePickerComponent
                :min="0"
                :max="500"
            />
        </div>
    </div>
</template>
