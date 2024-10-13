<script setup lang="ts">
import { useUpdateProductPageQueries } from '@/composables/useProduct';
import useProductStore from '@/stores/product';
import { useRouter } from 'vue-router';
import { debounce } from 'lodash';
import { ref, watch } from 'vue';

const props = defineProps<{
    min: number;
    max: number;
}>();

const { updateProductPageQueries } = useUpdateProductPageQueries();
const { priceRange } = useProductStore();
const minValue = ref<number>(priceRange.min);
const maxValue = ref<number>(priceRange.max);
const router = useRouter();

const handleInput = (event: KeyboardEvent, variable: 'min' | 'max'): void => {
    const validKeys = ['Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!validKeys.includes(event.key)) {
        return;
    }

    const value = variable === 'min' ? minValue : maxValue;
    const calculatedValue =
        event.key === 'Backspace'
            ? Number(String(value.value).slice(0, -1))
            : Number(String(value.value) + event.key);
    value.value =
        calculatedValue < props.min || calculatedValue > props.max ? value.value : calculatedValue;
};

const updateRoute = debounce((): void => {
    const query = updateProductPageQueries({
        page: 1,
        'filter[price]': `${minValue.value},${maxValue.value}`,
    });

    router.push({ name: 'product.list', query: query });
}, 1000);

watch(minValue, updateRoute);
watch(maxValue, updateRoute);
</script>

<template>
    <div class="flex flex-col items-center justify-center space-y-5 w-full px-5 pb-2">
        <div class="flex items-center w-full">
            <span class="text-gray-500 me-auto">از</span>
            <input
                @keydown.prevent="e => handleInput(e, 'min')"
                :value="minValue"
                class="border-b border-t-0 border-x-0 border-gray-300 focus:border-gray-300 focus:ring-0 w-44 font-bold text-start"
                dir="ltr"
                type="text"
            />
        </div>
        <div class="flex items-center w-full">
            <span class="text-gray-500 me-auto">تا</span>
            <input
                @keydown.prevent="e => handleInput(e, 'max')"
                :value="maxValue"
                class="border-b border-t-0 border-x-0 border-gray-300 focus:border-gray-300 focus:ring-0 w-44 font-bold text-start"
                dir="ltr"
                type="text"
            />
        </div>
    </div>
</template>
