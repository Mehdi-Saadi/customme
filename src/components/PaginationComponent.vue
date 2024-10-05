<script setup lang="ts">
import CircleArrowRightIcon from '@/components/icons/CircleArrowRightIcon.vue';
import CircleArrowLeftIcon from '@/components/icons/CircleArrowLeftIcon.vue';
import useProductStore from '@/stores/product';

const { fetchProducts, nextPage, previousPage, pagesToShow } = useProductStore();
</script>

<template>
    <div class="w-full flex items-center mt-10 h-14 px-28 space-x-3 rtl:space-x-reverse">
        <CircleArrowRightIcon
            @click="previousPage()"
            class="size-6 cursor-pointer"
            title="قبلی"
        />
        <div
            class="grow flex items-center h-full border rounded-3xl px-9 text-base space-x-6 rtl:space-x-reverse"
        >
            <button
                v-for="page in pagesToShow"
                :key="page"
                class="flex my-auto items-center justify-center rounded-full size-8 border border-gray-600"
                type="button"
                @click="fetchProducts(page)"
            >
                <span>{{ page }}</span>
            </button>
        </div>
        <CircleArrowLeftIcon
            @click="nextPage()"
            class="size-6 cursor-pointer"
            title="بعدی"
        />
    </div>
</template>
