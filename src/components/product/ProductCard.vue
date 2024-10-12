<script setup lang="ts">
import HeartIcon from '@/assets/icons/heart-icon.svg';

defineProps<{
    product: ProductAttributes;
}>();
</script>

<template>
    <div
        class="border border-gray-300 rounded-2xl w-full h-[30rem] p-4 flex flex-col items-center"
    >
        <!-- img -->
        <img
            :src="product.image"
            alt=""
            class="w-full h-64 rounded-lg"
            loading="lazy"
        />
        <!-- title -->
        <div class="w-full flex items-center justify-between mt-4">
            <span class="max-w-52 font-bold text-lg truncate">{{ product.name }}</span>
            <HeartIcon class="size-6" />
        </div>
        <!-- info -->
        <p
            class="w-full text-sm mt-2.5 truncate"
            v-html="product.description"
        ></p>
        <!-- price -->
        <span class="w-full font-bold text-xl mt-auto text-end">{{ product.price }} تومان</span>
        <button
            class="w-full border border-rose-750 py-2 mt-3 text-rose-750 text-sm rounded-lg hover:text-rose-950 hover:border-rose-950 transition duration-300"
            type="button"
        >
            <span>افزودن به سبد خرید</span>
        </button>
    </div>
</template>
