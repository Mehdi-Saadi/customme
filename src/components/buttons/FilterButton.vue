<script setup lang="ts">
import ChevronDownSolidIcon from '@/assets/icons/chevron-down-solid-icon.svg';
import ToggleButton from '@/components/buttons/ToggleButton.vue';

withDefaults(
    defineProps<{
        title: string;
        icon: 'chevron' | 'toggle';
        iconClass?: string;
        toggleChecked?: boolean;
        borderBottom?: boolean;
    }>(),
    {
        toggleChecked: false,
        borderBottom: true,
    }
);
</script>

<template>
    <button
        class="w-full flex items-center justify-between py-4"
        :class="{ 'border-b': borderBottom }"
        type="button"
    >
        <span class="text-sm text-gray-700">
            {{ title }}
        </span>
        <component
            :class="iconClass"
            :is="icon === 'chevron' ? ChevronDownSolidIcon : ToggleButton"
            :checked="toggleChecked"
        />
    </button>
</template>
