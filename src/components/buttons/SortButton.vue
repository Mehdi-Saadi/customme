<script setup lang="ts">
defineProps<{
    title: string;
    checked?: boolean;
}>();
</script>

<template>
    <li class="flex flex-col items-center cursor-pointer">
        <span
            class="px-2 py-1 text-sm"
            :class="{ 'text-rose-750': checked }"
        >
            {{ title }}
        </span>
        <span
            v-show="checked"
            class="w-full h-0.5 rounded-full bg-rose-750"
        />
    </li>
</template>
