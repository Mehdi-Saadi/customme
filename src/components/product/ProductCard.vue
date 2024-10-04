<script setup lang="ts">
import HeartIcon from '@/components/icons/HeartIcon.vue';

defineProps<{
    image: string;
    title: string;
    info: string;
    price: number | string;
}>();
</script>

<template>
    <div
        class="border border-gray-300 rounded-2xl w-72 h-[26.875rem] p-4 flex flex-col items-center"
    >
        <!-- img -->
        <img
            :src="image"
            alt=""
            class="w-full h-64 rounded-lg"
            loading="lazy"
        />
        <!-- title -->
        <div class="w-full flex items-center justify-between mt-4">
            <span class="font-bold text-lg">{{ title }}</span>
            <HeartIcon class="size-6" />
        </div>
        <!-- info -->
        <p class="w-full text-sm mt-2.5 truncate">
            {{ info }}
        </p>
        <!-- price -->
        <span class="w-full font-bold text-xl mt-auto text-end">{{ price }} تومان</span>
    </div>
</template>
