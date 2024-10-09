<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    min: number;
    max: number;
}>();

const minValue = ref<number>(props.min);
const maxValue = ref<number>(props.max);

const handleInput = (event: KeyboardEvent, variable: 'min' | 'max'): void => {
    const validKeys = ['Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!validKeys.includes(event.key)) {
        return;
    }

    const value = variable === 'min' ? minValue : maxValue;
    value.value =
        event.key === 'Backspace'
            ? Number(String(value.value).slice(0, -1))
            : Number(String(value.value) + event.key);
};
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
