<script setup lang="ts">
defineProps<{
    title: string;
    checked?: boolean;
}>();
</script>

<template>
    <button
        type="button"
        class="px-2 py-1 text-sm"
        :class="{ 'text-rose-750 border-b border-rose-750': checked }"
    >
        {{ title }}
    </button>
</template>
