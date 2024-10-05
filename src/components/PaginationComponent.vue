<script setup lang="ts">
import CircleArrowRightIcon from "@/components/icons/CircleArrowRightIcon.vue";
import CircleArrowLeftIcon from "@/components/icons/CircleArrowLeftIcon.vue";
import useProductStore from "@/stores/product";

const { nextPage, previousPage} = useProductStore();
</script>

<template>
    <div class="w-full flex items-center mt-10 h-14 px-28 space-x-3 rtl:space-x-reverse">
        <CircleArrowRightIcon
            @click="previousPage()"
            class="size-6 cursor-pointer"
            title="قبلی"
        />
        <div class="grow h-full border rounded-3xl py-3 px-9"></div>
        <CircleArrowLeftIcon
            @click="nextPage()"
            class="size-6 cursor-pointer"
            title="بعدی"
        />
    </div>
</template>
